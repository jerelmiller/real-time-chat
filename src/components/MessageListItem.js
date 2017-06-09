import PropTypes from 'prop-types'
import React from 'react'
import MessageBubble from './MessageBubble'

const MessageListItem = ({ message }) => (
  <MessageBubble mine={ message.mine }>
    { message.message }
  </MessageBubble>
)

export default MessageListItem
