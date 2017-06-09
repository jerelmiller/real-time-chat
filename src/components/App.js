import ChatContainer from './ChatContainer'
import guid from '../utils/guid'
import React, { Component } from 'react'
import MessageInput from './MessageInput'
import MessageList from './MessageList'
import WelcomeModal from './WelcomeModal'
import moment from 'moment'
import reducer, {
  changeValue,
  incomingMessage,
  resetValue,
  setUsername,
  userStartedTyping,
  userStoppedTyping
} from '../reducer'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = reducer(undefined, {})
    this.id = guid()

    WebSocket.prototype.emit = function(type, payload) {
      const msg = Object.assign({}, { payload }, { type })
      this.send(JSON.stringify(msg))
    }

    WebSocket.prototype.on = function(type, fn) {
      this.handlers = this.handlers || {}
      this.handlers[type] = fn
    }

    this.socket = new WebSocket(process.env.REACT_APP_SOCKET_ADDRESS)
    this.socket.onmessage = function(message) {
      const data = JSON.parse(message.data)
      const handler = this.handlers[data.type]
      return handler(data.payload)
    }

    this.socket.on('message', message => {
      this.setState(state =>
        reducer(state, incomingMessage(message, message.userId === this.id))
      )
    })

    this.socket.on('userEntered', user => {
      if (user.id !== this.id) {
        this.setState(state =>
          reducer(state, incomingMessage({
            userId: user.id,
            type: 'EVENT',
            username: user.username,
            timestamp: user.timestamp,
            event: 'entered the chat'
          }, false))
        )
      }
    })

    this.socket.on('userDidStartTyping', user => {
      if (user.id !== this.id) {
        this.setState(state => reducer(state, userStartedTyping(user)))
      }
    })

    this.socket.on('userDidStopTyping', user => {
      if (user.id !== this.id) {
        this.setState(state => reducer(state, userStoppedTyping(user)))
      }
    })

    this.socket.on('userDisconnected', user => {
      this.setState(state =>
        reducer(state, incomingMessage({
          userId: user.id,
          type: 'EVENT',
          username: user.username,
          timestamp: user.timestamp,
          event: 'left the chat'
        }, false))
      )
    })
  }

  componentDidMount() {
    window.onbeforeunload = () => {
      this.socket.emit('userDisconnected', {
        id: this.id,
        username: this.state.username
      })
    }
  }

  componentDidUpdate(_, prevState) {
    const { username, value } = this.state
    const user = { id: this.id, username }

    if (Boolean(value) && !prevState.value) {
      this.socket.emit('userDidStartTyping', user)
    }

    if (Boolean(prevState.value) && !value) {
      this.socket.emit('userDidStopTyping', user)
    }

    if (Boolean(username) && !prevState.username) {
      this.socket.emit('userEntered', {
        ...user,
        timestamp: moment.utc().toISOString()
      })
    }
  }

  handleChange = e => {
    const { value } = e.target

    this.setState(state => reducer(state, changeValue(value)))
  }

  handleSubmit = () => {
    this.sendMessage()
    this.setState(state => reducer(state, resetValue()))
  }

  sendMessage() {
    const { username, value } = this.state
    const timestamp = moment.utc().toISOString()

    if (!value) {
      return
    }

    this.socket.emit('message', {
      userId: this.id,
      type: 'CHAT',
      message: value,
      username,
      timestamp
    })
  }

  render() {
    const { username, messages, usersTyping, value } = this.state

    return (
      <div style={{ height: '100%' }}>
        <ChatContainer>
          <MessageList
            messages={ messages }
            usersTyping={ usersTyping }
          />
          <MessageInput
            value={ value }
            onChange={ this.handleChange }
            onSubmit={ this.handleSubmit }
          />
        </ChatContainer>
        <WelcomeModal
          open={ !username }
          onChooseName={ username =>
            this.setState(state => reducer(state, setUsername(username)))
          }
        />
      </div>
    )
  }
}

export default App
