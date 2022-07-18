import React from 'react'
import ItemCount from '../components/ItemCount'
import { products } from './products'


export const ItemDetail = ({ item }) => {
  return (
<div className="row row-cols-1 row-cols-md-3 g-4">
    <div className="col">
      <div className="card h-100">
      <img src="https://images.unsplash.com/photo-1572978841505-cd72e24e1fcf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"/>
        <div className="card-body">
          <h5 className="card-title">{item.nombre}</h5>
          <p className="card-text">{item.precio}</p>
          <p className="card-text">{item.descripcion}</p>
        </div>
        <div className="card-footer">
          <small className="text-muted"><ItemCount/></small>
          
        </div>
      </div>
    </div>
    </div>
  )
}
