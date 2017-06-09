import styled, { css } from 'styled-components'

const animationTiming = '0.3s cubic-bezier(0.3, 0.79, 0.46, 0.98)'

export default styled.div`
  clear: both;
  float: ${({ align }) => align};
  text-align: ${({ align }) => align};
  max-width: 60%;
  margin-bottom: 1rem;

  ${({ enterAnimation }) => enterAnimation && css`
    &.message-list-enter-active {
      animation: ${enterAnimation} ${animationTiming};
    `}
  }

  ${({ leaveAnimiation }) => leaveAnimiation && css`
    &.message-list-leave-active {
      animation: ${leaveAnimiation} ${animationTiming};
    `}
  }

  ${({ mine }) => mine && css`
    float: right;
    text-align: right;
  `}
`
