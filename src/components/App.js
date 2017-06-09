import ChatContainer from './ChatContainer'
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

    props.socket.on('message', this.handleIncomingMessage)
    props.socket.on('userDidStartTyping', this.handleStartTyping)
    props.socket.on('userDidStopTyping', this.handleStopTyping)
  }

  componentDidUpdate(_, prevState) {
    const { id, socket } = this.props
    const { typing } = this.state
    const user = { id, name: 'Jerel' }

    if (typing && !prevState.typing) {
      socket.emit('userDidStartTyping', user)
    } else if (prevState.typing && !typing) {
      socket.emit('userDidStopTyping', user)
    }
  }

  handleStartTyping = user => {
    if (user.id === this.props.id) {
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
    if (user.id === this.props.id) {
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
        { ...message, mine: message.id === this.props.id }
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
    const { id, socket } = this.props
    const { message } = this.state
    const timestamp = moment.utc().toISOString()

    if (!message) {
      return
    }

    socket.emit('message', {
      id,
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
