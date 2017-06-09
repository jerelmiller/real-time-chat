import React from 'react'
import MessageBubble from './MessageBubble'
import MessageInfo from './MessageInfo'
import MessageListItemContainer from './MessageListItemContainer'
import TypingCircles from './TypingCircles'
import { scaleIn, scaleOut } from '../animations'

const TypingIndicator = ({ username }) => (
  <MessageListItemContainer
    enterAnimation={ scaleIn }
    leaveAnimation={ scaleOut }
  >
    <MessageBubble>
      <TypingCircles />
    </MessageBubble>
    <MessageInfo>
      <strong>{ username } </strong>
      is typing...
    </MessageInfo>
  </MessageListItemContainer>
)

export default TypingIndicator
