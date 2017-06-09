import styled from 'styled-components'
import moment from 'moment'

const DATE_FORMAT = 'MMM Do, h:mma'

export default styled.div.attrs({
  children: ({ date, name }) => (
    `${moment(date).format(DATE_FORMAT)} from ${name}`
  )
})`
  color: #999;
  font-size: 0.75rem;
  margin-top: 10px;
`
