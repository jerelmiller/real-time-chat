import styled from 'styled-components'
import moment from 'moment'

const DATE_FORMAT = 'MMM Do, h:mma'

export default styled.div.attrs({
  children: ({ date }) => moment(date).format(DATE_FORMAT)
})`
  color: #999;
  font-size: 0.8rem;
  margin-top: 10px;
`
