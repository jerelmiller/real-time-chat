import styled from 'styled-components'

export default styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: auto;
  z-index: 99;
  background-color: rgba(82, 89, 95, 0.5);
  display: ${({ open }) => open ? 'block' : 'none' };
`
