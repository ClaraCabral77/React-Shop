import React from 'react'
import Item from "./Item"



export const ItemList = ({ items }) => {
  return (
    <>
    {
    items.map(item => <Item producto={ item } key={item.id} nombre={item.nombre} precio={item.precio} descripcion={item.descripcion} /> )
    }
</>
  )
  }

  export default ItemList

