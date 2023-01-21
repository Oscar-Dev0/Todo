import React from 'react'
import { Context } from '../../../../context/curso';
import { TitleButton, TitleText } from './style'

export default function TodoTitle() {
  const { isLoad, one, two, add } = React.useContext(Context);

  return (
      <TitleText>
        {isLoad? "loading...": `Tareas ${one} de ${two}`}
        
        <TitleButton disabled={isLoad} onClick={add}>+</TitleButton>
      </TitleText>

  )
}
