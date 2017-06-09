import React from 'react'
import Input from './Input'
import MessageInputContainer from './MessageInputContainer'

const ENTER_KEY = 13

const MessageInput = props => (
  <MessageInputContainer>
    <Input
      { ...props }
      type='text'
      onKeyDown={ e => {
        if (e.which === ENTER_KEY) {
          props.onSubmit()
        }
      }}
    />
  </MessageInputContainer>
)

export default MessageInput
