import { FormField, TextInput } from "grommet";
import Modal from "react-modal";
import styled from "styled-components"

export const StyledModal = styled(Modal)`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ModalHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  .modal-title {
    width: 75%;
    font-family: 'Ubuntu';
    font-size: 1.888rem;
    font-weight: 500;
    line-height: 1em;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #e1e1e1;
  }
  .close-icon {
    font-size: 1.888rem;
    color: #e1e1e1;
    margin-top: -5px;
    margin-right: -14px;
  }
  
`


export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 35px;
  gap: 25px;

  button {
    all: unset;
    font-family: 'Ubuntu';
    font-size: 1rem;
    font-weight: 800;
    line-height: 1em;
    letter-spacing: 0.7px;
    color: #e1e1e1;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    border: 4px solid #96885f;
  }
`


export const modalStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 100,
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '220px',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    overflowY: 'auto',
    overflowX: 'hidden',
  },
  content: {
    width: '300px',
    position: 'fixed',
    top: '50px',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#2c2c2c',
    border: 'hidden',
    boxSizing: 'border-box',
    padding: '20px 35px',
    borderRadius: '4px',
  },
}

export const formField = styled(FormField)`
  color: #f8f7f2;
  font-weight: 700;
`

export const textInput = styled(TextInput)`
  background: #303236;
`