import React from 'react'
import MessageBubble from './MessageBubble'
import MessageDetails from './MessageDetails'
import MessageListItemContainer from './MessageListItemContainer'
import MessageSentInfo from './MessageSentInfo'

const MessageListItem = ({ message }) => (
  <MessageListItemContainer mine={ message.mine }>
    <MessageBubble mine={ message.mine }>
      { message.message }
    </MessageBubble>
    <MessageSentInfo date={ message.timestamp } name={ message.name } />
  </MessageListItemContainer>
)

export default MessageListItem
