import React from 'react'
import MessageBubble from './MessageBubble'
import MessageListItemContainer from './MessageListItemContainer'
import MessageSentDate from './MessageSentDate'

const MessageListItem = ({ message }) => (
  <MessageListItemContainer mine={ message.mine }>
    <MessageBubble mine={ message.mine }>
      { message.message }
    </MessageBubble>
    <MessageSentDate date={ message.timestamp } />
  </MessageListItemContainer>
)

export default MessageListItem
