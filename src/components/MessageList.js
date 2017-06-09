import MessageListItem from './MessageListItem'
import React from 'react'

const MessageList = ({ messages }) => (
  <div>
    { messages.map(message => (
      <MessageListItem
        key={ message.timestamp }
        message={ message }
      />
    )) }
  </div>
)

export default MessageList
