import styled from 'styled-components'

const ChatContainer = styled.div`
  width: 50%;
  margin: 0 auto;
  height: 90%;
  border-radius: 5px;
  position: relative;
  top: 50%;
  transform: translateY(-50%);

  @media(max-width: 1000px) {
    width: 70%;
  }

  @media(max-width: 600px) {
    width: 85%;
  }
`

export default ChatContainer
