import { CSSTransitionGroup } from 'react-transition-group'
import MessageListContainer from './MessageListContainer'
import MessageListItem from './MessageListItem'
import { findDOMNode } from 'react-dom'
import React, { Component } from 'react'

class MessageList extends Component {
  componentWillUpdate() {
    const node = findDOMNode(this)
    this.shouldScroll = node.scrollTop + node.offsetHeight === node.scrollHeight
  }

  componentDidUpdate() {
    if (this.shouldScroll) {
      const node = findDOMNode(this)
      node.scrollTop = node.scrollHeight
    }
  }

  render() {
    const { messages } = this.props

    return (
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
    )
  }
}

export default MessageList
