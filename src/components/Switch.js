import { Children } from 'react'

const Switch = ({ children, condition }) => {
  let child = null

  Children.forEach(children, element => {
    const { match } = element.props

    if (match === condition) {
      child = element
    }
  })

  return child
}

export default Switch
