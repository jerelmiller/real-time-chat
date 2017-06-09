import React from 'react'
import MessageBubble from './MessageBubble'
import MessageListItemContainer from './MessageListItemContainer'
import MessageInfo from './MessageInfo'
import moment from 'moment'
import Switch from './Switch'
import When from './When'
import { slideInFromLeft, slideInFromRight } from '../animations'

const DATE_FORMAT = 'MMM Do, h:mma'

const MessageListItem = ({
  message: {
    event,
    mine,
    message,
    username,
    timestamp,
    type
  }}
) => (
  <MessageListItemContainer
    align={ mine ? 'right' : 'left' }
    enterAnimation={ mine ? slideInFromRight : slideInFromLeft }
  >
    { type === 'CHAT' &&
      <MessageBubble mine={ mine }>
        { message }
      </MessageBubble>
    }
    <MessageInfo>
      <Switch condition={ type }>
        <When match='CHAT'>
          <span>
            { `${moment(timestamp).format(DATE_FORMAT)} from ${username}` }i
          </span>
        </When>
        <When match='EVENT'>
          <em>
            { `${moment(timestamp).format(DATE_FORMAT)} ${username} ${event}` }
          </em>
        </When>
      </Switch>
    </MessageInfo>
  </MessageListItemContainer>
)

export default MessageListItem
