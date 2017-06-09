import React from 'react'
import MessageSendIcon from './MessageSendIcon'
import MessageTextInput from './MessageTextInput'
import MessageInputContainer from './MessageInputContainer'

const ENTER_KEY = 13

const MessageInput = ({ onSubmit, ...props }) => (
  <MessageInputContainer>
    <MessageTextInput
      { ...props }
      placeholder='Write your message...'
      type='text'
      onKeyDown={ e => {
        if (e.which === ENTER_KEY) {
          onSubmit()
        }
      }}
    />
    <MessageSendIcon onClick={ onSubmit } />
  </MessageInputContainer>
)

export default MessageInput
