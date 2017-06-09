import MessageListContainer from './MessageListContainer'
import MessageListItem from './MessageListItem'
import React from 'react'

const MessageList = ({ messages }) => (
  <MessageListContainer>
    { messages.map(message => (
      <MessageListItem
        key={ message.timestamp }
        message={ message }
      />
    )) }
  </MessageListContainer>
)

export default MessageList
