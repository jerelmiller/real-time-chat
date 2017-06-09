import ChatContainer from './ChatContainer'
import io from 'socket.io-client'
import guid from '../utils/guid'
import React, { Component } from 'react'
import MessageInput from './MessageInput'
import MessageList from './MessageList'
import moment from 'moment'

class App extends Component {
  state = {
    typing: false,
    usersTyping: [],
    messages: [],
    message: ''
  }

  constructor(props) {
    super(props)

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

    this.setState(state => ({
      usersTyping: [
        ...state.usersTyping,
        user
      ]
    }))
  }

  handleStopTyping = user => {
    if (user.id === this.id) {
      return
    }

    this.setState(state => ({
      usersTyping: state.usersTyping.filter(u => u.id !== user.id)
    }))
  }

  handleIncomingMessage = message => {
    this.setState(state => ({
      messages: [
        ...state.messages,
        { ...message, mine: message.id === this.id }
      ]
    }))
  }

  handleChange = e => {
    const { value } = e.target

    this.setState({
      message: value,
      typing: Boolean(value)
    })
  }

  handleSubmit = () => {
    this.sendMessage()
    this.setState({ message: '', typing: false })
  }

  sendMessage() {
    const { message } = this.state
    const timestamp = moment.utc().toISOString()

    if (!message) {
      return
    }

    this.socket.emit('message', {
      id: this.id,
      message,
      timestamp,
      name: 'Jerel'
    })
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
