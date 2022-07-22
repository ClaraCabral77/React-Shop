import React from 'react'
import ItemCount from '../components/ItemCount'
import ItemDetailContaier from './ItemDetailContainer'
import {useState} from "react"
import {Link} from "react-router-dom"






export const ItemDetail = ({ item }) => {

  const[itemCount, setItemCount] = useState(0);
  
  const onAdd = (param) =>{ 
    console.log ('Compraste '+(param)+ ' unidades');
    setItemCount(param);
  }
    return (
    <>
   {
      <div className="detailcard">
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
          <small className="text-muted"> 
       

</small>
          </div>
        </div>
      </div>
      <div className="agregado"> 
      <div className="card-body">
          <h5 className="card-title">{item.nombre}</h5>
          <p className="card-text">{item.precio}/ caja </p>
          <p className="card-text">Los macarrones Ted vienen por unidades únicamente de 6 alfajores por caja.Lorem This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action,
</p>     {
  itemCount === 0
  ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd}/>
  :<Link to="/Cart" style={{textDecoration: "none"}}><button className="botonCarrito">Checkout</button></Link>
}
      </div></div>
   
    </div>
 
    </div>
  
   }


   </>
  )
    }
