import React from 'react'
import MessageBubble from './MessageBubble'
import TypingCircles from './TypingCircles'

const TypingIndicator = () => (
  <MessageBubble>
    <TypingCircles />
  </MessageBubble>
)

export default TypingIndicator
