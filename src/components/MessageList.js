import AutoScroll from './AutoScroll'
import { CSSTransitionGroup } from 'react-transition-group'
import MessageListContainer from './MessageListContainer'
import MessageListItem from './MessageListItem'
import React from 'react'
import TypingIndicator from './TypingIndicator'

const MessageList = ({ messages, usersTyping }) => (
  <AutoScroll>
    <MessageListContainer>
      <CSSTransitionGroup
        transitionName='message-list'
        transitionEnterTimeout={ 300 }
      >
        { messages.map(message => (
          <MessageListItem
            key={ message.timestamp }
            message={ message }
          />
        )) }
        { usersTyping.map(user => (
          <TypingIndicator key={ user.id } name={ user.name } />
        ))}
      </CSSTransitionGroup>
    </MessageListContainer>
  </AutoScroll>
)

export default MessageList
