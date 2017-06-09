import React from 'react'
import MessageBubble from './MessageBubble'
import MessageInfo from './MessageInfo'
import MessageListItemContainer from './MessageListItemContainer'
import TypingCircles from './TypingCircles'
import styled from 'styled-components'

const TypingIndicator = ({ name }) => (
  <MessageListItemContainer>
    <MessageBubble>
      <TypingCircles />
    </MessageBubble>
    <MessageInfo>{ name } is typing...</MessageInfo>
  </MessageListItemContainer>
)

export default TypingIndicator
