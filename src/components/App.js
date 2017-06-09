import ChatContainer from './ChatContainer'
import io from 'socket.io-client'
import guid from '../utils/guid'
import React, { Component } from 'react'
import MessageInput from './MessageInput'
import MessageList from './MessageList'
import moment from 'moment'
import reducer from '../reducer'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = reducer(undefined, {})
    this.id = guid()
    this.socket = io(process.env.REACT_APP_SOCKET_ADDRESS)
    this.socket.on('message', this.handleIncomingMessage)
    this.socket.on('userDidStartTyping', this.handleStartTyping)
    this.socket.on('userDidStopTyping', this.handleStopTyping)
  }

  componentDidUpdate(_, prevState) {
    const { typing } = this.state
    const user = { id: this.id, name: 'Jerel' }

    if (typing && !prevState.typing) {
      this.socket.emit('userDidStartTyping', user)
    } else if (prevState.typing && !typing) {
      this.socket.emit('userDidStopTyping', user)
    }
  }

  handleStartTyping = user => {
    if (user.id === this.id) {
      return
    }

    this.setState(state =>
      reducer(state, {
        type: 'USER_STARTED_TYPING',
        user: user
      })
    )
  }

  handleStopTyping = user => {
    if (user.id === this.id) {
      return
    }

    this.setState(state =>
      reducer(state, {
        type: 'USER_STOPPED_TYPING',
        user
      })
    )
  }

  handleIncomingMessage = message => {
    this.setState(state =>
      reducer(state, {
        type: 'ADD_MESSAGE',
        mine: message.id === this.id,
        message
      })
    )
  }

  handleChange = e => {
    const { value } = e.target

    this.setState(state => (
      reducer(state, {
        type: 'CHANGE_MESSAGE',
        value
      })
    ))
  }

  handleSubmit = () => {
    this.sendMessage()
    this.setState(state => reducer(state, { type: 'RESET_MESSAGE' }))
  }

  sendMessage() {
  }

  render() {
    const { message, messages, usersTyping } = this.state

    return (
      <ChatContainer>
        <MessageList
          messages={ messages }
          usersTyping={ usersTyping }
        />
        <MessageInput
          value={ message }
          onChange={ this.handleChange }
          onSubmit={ this.handleSubmit }
        />
      </ChatContainer>
    )
  }
}

export default App
