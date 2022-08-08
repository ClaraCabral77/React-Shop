import React from 'react'
import {Link} from "react-router-dom"


export const Item = ({producto}) => {

 
    
  
  return (
<div className="itemStyle">
    <div className="card h-100">
    <img className="imagenes"src={producto.imagen} alt="product"></img>
      <div className="card-body">
        <h5 className="card-title">{producto.nombre}</h5>
        <p className="card-text">${producto.precio}</p>
        <p className="card-text">{producto.descripcion}</p>
      </div>
      <div className="card-footer">
      <Link to={`/item/${producto.id}`}><button  className="btn btn-warning" >Ver más</button></Link>
      
    </div>
  
</div>

  
</div>

  )

}


export default Item