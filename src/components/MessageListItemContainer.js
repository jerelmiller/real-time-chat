import styled, { css } from 'styled-components'

export default styled.div`
  clear: both;
  float: left;
  max-width: 60%;

  ${({ mine }) => mine && css`
    float: right;
  `}
`
