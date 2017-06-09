import styled from 'styled-components'

const Input = styled.input`
  font-weight: 700;
  width: 100%;
  padding: 1rem;
  font-size: 1rem;

  &:focus { outline: none; }
  &::placeholder {
    opacity: 0.5;
    font-weight: 300;
  }
`

export default Input
