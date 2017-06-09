import PropTypes from 'prop-types'
import React from 'react'
import MessageBubble from './MessageBubble'

const MessageListItem = ({ message }) => (
  <MessageBubble isMine={ message.isMine }>
    { message.message }
  </MessageBubble>
)

export default MessageListItem
