import styled, { css } from 'styled-components'

const animationTiming = '0.3s cubic-bezier(0.3, 0.79, 0.46, 0.98)'

export default styled.div`
  clear: both;
  float: ${({ align }) => align || 'left'};
  text-align: ${({ align }) => align || 'left'};
  max-width: 60%;
  margin-bottom: 1rem;

  ${({ enterAnimation }) => enterAnimation && css`
    &.message-list-enter-active {
      animation: ${enterAnimation} ${animationTiming};
    `}
  }

  ${({ leaveAnimation }) => leaveAnimation && css`
    &.message-list-leave {
      opacity: 1;
    }
    &.message-list-leave-active {
      transition: opacity 0.3s ease-out;
      animation: ${leaveAnimation} ${animationTiming};
      opacity: 0;
    `}
  }

  ${({ mine }) => mine && css`
    float: right;
    text-align: right;
  `}
`
