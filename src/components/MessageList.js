import AutoScroll from './AutoScroll'
import { CSSTransitionGroup } from 'react-transition-group'
import MessageListContainer from './MessageListContainer'
import MessageListItem from './MessageListItem'
import React from 'react'

const MessageList = ({ messages }) => (
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
      </CSSTransitionGroup>
    </MessageListContainer>
  </AutoScroll>
)

export default MessageList
