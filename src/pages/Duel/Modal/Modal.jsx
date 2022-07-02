/* eslint-disable react/prop-types */
import { IoClose } from 'react-icons/io5'
import React from "react"
import * as S from "./style"

export default function PlaceBetModal({
  placeBetModal,
  setPlaceBetModal,
  bet,
  setBet,
  teamName,
  odd,
  valueAccepted,
  handleDuel
}) {
  function closeModal() {
    document.body.style.overflow = 'unset'
    setPlaceBetModal(false)
  }

  return (
    <S.StyledModal
      isOpen={placeBetModal}
      ariaHideApp={false}
      onRequestClose={() => closeModal()}
      style={S.modalStyles}
    >
      <S.ModalHeader>
        <p className='modal-title'>
          {teamName} - {odd}
        </p>
        <p className='modal-title'>
          Valor aceito para essa aposta : <span>{valueAccepted}</span> Blerths
        </p>
        <IoClose className='close-icon' onClick={() => closeModal()} />
      </S.ModalHeader>
      <S.ButtonContainer>
        <S.formField
          onChange={(e) => {
            setBet(e.target.value)
          }}
          name='bet'
        >
          <S.textInput name='bet' value={bet} placeholder='Valor' />
        </S.formField>
        <button
          onClick={(e) => {
            handleDuel(e)
          }}
          type='submit'
        >
          Apostar!
        </button>
      </S.ButtonContainer>
    </S.StyledModal>
  )
}
