import React from 'react'
import ItemCount from '../components/ItemCount'
import { products } from './products'




export const Item = ({producto}) => {
  return (
    
    <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card h-100">
    <img className="imagenes"src={producto.imagen}></img>
      <div className="card-body">
        <h5 className="card-title">{producto.nombre}</h5>
        <p className="card-text">{producto.precio}</p>
        <p className="card-text">{producto.descripcion}</p>
      </div>
      <div className="card-footer">
        <small className="text-muted"><ItemCount/></small>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
    <img src={producto.imagen2} className="card-img-top" alt="x"/>
      <div className="card-body">
        <h5 className="card-title">Macarrones Grif</h5>
        <p className="card-text">$55</p>
        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div className="card-footer">
        <small className="text-muted"><ItemCount/></small>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
    <img src={producto.imagen3} className="card-img-top" alt="x"/>
      <div className="card-body">
        <h5 className="card-title">Macarrones Loth</h5>
        <p className="card-text">$39</p>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
      <div className="card-footer">
        <small className="text-muted"><ItemCount/></small>
      </div>
      </div>
    </div>
  
</div>
   
    
  )
}

export default Item