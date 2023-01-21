import React from 'react'
import { CardButton, CardContainer, CardText } from "./style"

export default function TodoCard({ item , Complete, Delete}) {
  
  return (
    <CardContainer>
      <CardButton onClick={()=>{Complete(item)}}>{item.completed ? "📗" : "✔"}</CardButton>
      <CardText>{item ? item.title : "nada"}</CardText>
      <CardButton onClick={()=>{ Delete(item)}}>❌</CardButton>
    </CardContainer>
  )
}
