import ModalContainer from './ModalContainer'
import ModalContent from './ModalContent'
import React, { Component } from 'react'

export default class Modal extends Component {
  componentDidUpdate() {
    if (this.props.open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }

  render() {
    const { children, open } = this.props

    return (
      <ModalContainer open={ open }>
        <ModalContent>
          { children }
        </ModalContent>
      </ModalContainer>
    )
  }
}
