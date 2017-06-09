import styled, { css, keyframes } from 'styled-components'

const slideStrength = '20%'

const theirMessage = keyframes`
  from {
    transform: translate3d(-${slideStrength}, 0, 0);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`

const myMessage = keyframes`
  from {
    transform: translate3d(${slideStrength}, 0, 0);
    opacity: 0;
  }

  to {
    transform: scale(1) translate3d(0);
    opacity: 1;
  }
`

export default styled.div`
  clear: both;
  float: left;
  max-width: 60%;
  margin-bottom: 1rem;

  &.message-list-enter-active {
    animation: ${({ mine }) => mine ? myMessage : theirMessage }
      0.3s cubic-bezier(0.3, 0.79, 0.46, 0.98);
  }

  ${({ mine }) => mine && css`
    float: right;
    text-align: right;
  `}
`
