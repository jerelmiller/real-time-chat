import ChatContainer from './ChatContainer'
import guid from '../utils/guid'
import React, { Component } from 'react'
import MessageInput from './MessageInput'
import MessageList from './MessageList'
import WelcomeModal from './WelcomeModal'
import moment from 'moment'
import { Socket } from 'phoenix'
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
    const socket = new Socket(process.env.REACT_APP_SOCKET_ADDRESS, {
      params: {},
      logger: (kind, msg, data) => console.log({ kind, msg, data })
    })
    socket.connect()

    this.channel = socket.channel('chat:lobby', {})
    this.channel.join()

    this.channel.on('message', message => {
      this.setState(state =>
        reducer(state, incomingMessage(message, message.userId === this.id))
      )
    })

    this.channel.on('userEntered', user => {
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

    this.channel.on('userDidStartTyping', user => {
      if (user.id !== this.id) {
        this.setState(state => reducer(state, userStartedTyping(user)))
      }
    })

    this.channel.on('userDidStopTyping', user => {
      if (user.id !== this.id) {
        this.setState(state => reducer(state, userStoppedTyping(user)))
      }
    })

    this.channel.on('userDisconnected', user => {
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
      this.channel.push('userDisconnected', {
        id: this.id,
        username: this.state.username
      })
    }
  }

  componentDidUpdate(_, prevState) {
    const { username, value } = this.state
    const user = { id: this.id, username }

    if (Boolean(value) && !prevState.value) {
      this.channel.push('userDidStartTyping', user)
    }

    if (Boolean(prevState.value) && !value) {
      this.channel.push('userDidStopTyping', user)
    }

    if (Boolean(username) && !prevState.username) {
      this.channel.push('userEntered', {
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

    this.channel.push('message', {
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
