import React from 'react'
import MessageBubble from './MessageBubble'
import MessageListItemContainer from './MessageListItemContainer'
import MessageInfo from './MessageInfo'
import moment from 'moment'
import { slideFromLeft, slideFromRight } from '../animations'

const DATE_FORMAT = 'MMM Do, h:mma'

const MessageListItem = ({ message: { mine, message, name, timestamp }}) => (
  <MessageListItemContainer
    align={ mine ? 'right' : 'left' }
    enterAnimation={ mine ? slideFromRight : slideFromLeft }
  >
    <MessageBubble mine={ mine }>
      { message }
    </MessageBubble>
    <MessageInfo>
      { `${moment(timestamp).format(DATE_FORMAT)} from ${name}` }
    </MessageInfo>
  </MessageListItemContainer>
)

export default MessageListItem
