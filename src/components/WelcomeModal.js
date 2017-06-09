import Modal from './Modal'
import ModalHeader from './ModalHeader'
import ModalTitle from './ModalTitle'
import Input from './Input'
import React from 'react'
import WelcomeModalDescription from './WelcomeModalDescription'

const WelcomeModal = ({ open, onChooseName }) => (
  <Modal open={ open }>
    <ModalHeader>
      <ModalTitle>Welcome to Chat Inc. &#8482;</ModalTitle>
    </ModalHeader>
    <WelcomeModalDescription>
      Please choose your username
    </WelcomeModalDescription>
    <Input
      type='text'
      placeholder='Enter your desired username...'
      onKeyUp={ e => {
        if (e.which === 13) {
          onChooseName(e.target.value)
        }
      }}
    />
  </Modal>
)

export default WelcomeModal
