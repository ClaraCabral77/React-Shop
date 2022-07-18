import React from 'react'
import ItemCount from '../components/ItemCount'




export const Item = ({producto}) => {
  return (
    
    <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card h-100">
    <img src="https://images.unsplash.com/photo-1572978841505-cd72e24e1fcf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"/>
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
    <img src="https://images.unsplash.com/photo-1612201142855-7873bc1661b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="card-img-top" alt="x"/>
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
    <img src="https://images.unsplash.com/photo-1528919460073-af8ef5efad10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=949&q=80" className="card-img-top" alt="x"/>
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