import React from 'react'
import ItemCount from '../components/ItemCount'
import { products } from './products'




export const Item = ({producto}) => {

  const onAdd = (param) =>{ 
    console.log ('Compraste '+(param)+ ' unidades');
    
  }
  return (
<div class="flexbox">
  
    <div class="card h-100">
    <img className="imagenes"src={producto.imagen}></img>
      <div className="card-body">
        <h5 className="card-title">{producto.nombre}</h5>
        <p className="card-text">{producto.precio}</p>
        <p className="card-text">{producto.descripcion}</p>
      </div>
      <div className="card-footer">
        <small className="text-muted"> <ItemCount initial={1} stock={20} onAdd={onAdd} /></small>
      
    </div>
  
</div>

  
</div>

  )

}


export default Item