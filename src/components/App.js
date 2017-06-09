import ChatContainer from './ChatContainer'
import React, { Component } from 'react'
import MessageInput from './MessageInput'
import MessageList from './MessageList'
import moment from 'moment'

class App extends Component {
  state = {
    messages: [],
    message: ''
  }

  constructor(props) {
    super(props)

    props.socket.on('message', this.handleIncomingMessage)
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
    this.setState({ message: e.target.value })
  }

  handleSubmit = () => {
    this.sendMessage()
    this.setState({ message: '' })
  }

  sendMessage() {
    const { id } = this.props
    const { message } = this.state
    const timestamp = moment.utc().toISOString()

    this.props.socket.emit('message', {
      id,
      message,
      timestamp
    })
  }

  render() {
    const { message, messages } = this.state

    return (
      <ChatContainer>
        <MessageList messages={ messages } />
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
