import { keyframes } from 'styled-components'
const slideStrength = '20%'

export const slideFromLeft = keyframes`
  from {
    transform: translate3d(-${slideStrength}, 0, 0);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`

export const slideFromRight = keyframes`
  from {
    transform: translate3d(${slideStrength}, 0, 0);
    opacity: 0;
  }

  to {
    transform: scale(1) translate3d(0);
    opacity: 1;
  }
`
