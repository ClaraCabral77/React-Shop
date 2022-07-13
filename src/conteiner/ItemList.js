import React from 'react'
import Item from "./Item"



export const ItemList = ({ items }) => {
  return (
    <>
    {
    items.map(item => <Item producto={ item }/>)
    }
</>
  )
  }

  export default ItemList
