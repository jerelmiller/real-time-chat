import React from 'react'
import Input from './Input'
import MessageInputContainer from './MessageInputContainer'

const MessageInput = props => (
  <MessageInputContainer>
    <Input type='text' { ...props } />
  </MessageInputContainer>
)

export default MessageInput
