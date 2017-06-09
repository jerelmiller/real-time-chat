import styled, { css } from 'styled-components'

const MessageBubble = styled.div`
  padding: 0.75rem;
  line-height: 1.5;
  font-size: 1rem;
  border-radius: 7px;
  clear: both;
  margin-bottom: 1rem;
  max-width: 60%;
  background: #eee;
  float: left;
  ${({ mine }) => mine && css`
    color: white;
    background: #6F5A98;
    float: right;
  `}
`

export default MessageBubble
