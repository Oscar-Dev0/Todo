import React from 'react'
import { Context } from '../../../../context/curso';
import { Search } from './style'

export default function TodoSearch() {

  const { onSearch, search, isLoad } =  React.useContext(Context);

  return (
    <div>
   <Search value={search} onChange={(e)=> onSearch(e)} type="text" placeholder={ isLoad? "Cargando..." : "Buscar" }></Search>  
   </div>
  )
}
