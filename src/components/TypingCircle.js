import styled, { keyframes } from 'styled-components'

const SIZE = '0.75rem'

const typing = keyframes`
  0%, 33%, 100% {
    transform: scale(1);
    opacity: 0.6;
  }
  50% {
    transform: scale(1.3);
    opacity: 1;
  }
`

export default styled.span`
  display: block;
  height: ${SIZE};
  width: ${SIZE};
  animation: ${typing} 1s ease-in-out infinite;
  background-color: #999;
  border-radius: 50%;
  margin: 0.5rem 3px;

  &:nth-child(2) { animation-delay: 333ms; }
  &:nth-child(3) { animation-delay: 666ms; }
`
