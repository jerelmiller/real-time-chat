import styled, { css } from 'styled-components'

export default styled.div`
  clear: both;
  float: left;
  max-width: 60%;
  margin-bottom: 1rem;

  ${({ mine }) => mine && css`
    float: right;
    text-align: right;
  `}
`
