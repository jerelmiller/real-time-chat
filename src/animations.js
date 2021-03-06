import { keyframes } from 'styled-components'
const slideStrength = '20%'

export const slideInFromLeft = keyframes`
  from {
    transform: translate3d(-${slideStrength}, 0, 0);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`

export const slideInFromRight = keyframes`
  from {
    transform: translate3d(${slideStrength}, 0, 0);
    opacity: 0;
  }

  to {
    transform: scale(1) translate3d(0);
    opacity: 1;
  }
`

export const scaleIn = keyframes`
  from { transform: scale(0.4); }
  to { transform: scale(1); }
`

export const scaleOut = keyframes`
  from { opacity: scale(1); }
  to { transform: scale(0.4); }
`
