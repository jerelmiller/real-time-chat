import React from 'react'
import MessageBubble from './MessageBubble'
import MessageListItemContainer from './MessageListItemContainer'

const MessageListItem = ({ message }) => (
  <MessageListItemContainer mine={ message.mine }>
    <MessageBubble mine={ message.mine }>
      { message.message }
    </MessageBubble>
  </MessageListItemContainer>
)

export default MessageListItem
