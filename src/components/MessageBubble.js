import styled, { css } from 'styled-components'

const colors = {
  other: '#e9e9e9',
  mine: '#6F5A98'
}

const MessageBubble = styled.div`
  display: inline-block;
  padding: 0.5rem 1rem;
  line-height: 1.5;
  font-size: 1rem;
  font-weight: 300;
  border-radius: 7px;
  background: ${colors.other};
  position: relative;

  &:after {
    content: '';
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border: 10px solid transparent;
    border-right-color: ${colors.other};
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
  }

  ${({ mine }) => mine && css`
    color: white;
    background: ${colors.mine};

    &:after {
      border-left-color: ${colors.mine};
      border-right-color: transparent;
      right: initial;
      left: 100%;
    }
  `}
`

export default MessageBubble
