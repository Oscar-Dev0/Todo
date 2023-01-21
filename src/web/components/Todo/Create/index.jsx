import React from 'react'
import { ModalBody, ModalButton, ModalContainer, ModalHeader, ModalQuit, ModalText } from './style';
import { Context } from '../../../../context/curso';

export default function Create() {
  const { ofFModal, New, SetTask } =  React.useContext( Context );

  return (
    <ModalContainer onSubmit={SetTask}>
        <ModalHeader>
        <h1>
            Crear Tarea
        </h1>
        <ModalQuit onClick={ofFModal}>❌</ModalQuit>
        </ModalHeader>


        <ModalBody>
          <ModalText onChange={New}/>
        <ModalButton type= "submit" value='Crear'/>
        </ModalBody>
    </ModalContainer>
  )
}
