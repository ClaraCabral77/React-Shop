import React from 'react'
import ItemCount from '../components/ItemCount'
import ItemDetailContaier from './ItemDetailContainer'
import {useState, useContext} from "react"

import {Link} from "react-router-dom"
import { CartContext } from '../components/CartContext'
import {db} from "../utils/FirebaseConfig"
import { collection, getDocs } from "firebase/firestore";






export const ItemDetail = ({ item }) => {

  const[itemCount, setItemCount] = useState(0);
  const test= useContext(CartContext)
  
  const onAdd = (param) =>{ 
    console.log ('Compraste '+(param)+ ' unidades');
    setItemCount(param);
    test.addToCart(item, param)
  }



    return (
    <>
   {
      <div className="detailcard">
      <div className="row row-cols-1 row-cols-md-3 g-4">
    <div className="col">
      <div className="card h-100">
      <img src={item.imagen}/>
        <div className="card-body">
          <h5 className="card-title">{item.nombre}</h5>
          <p className="card-text">{item.precio}</p>
          <p className="card-text">{item.descripcion}</p>
        </div>
        
        </div>
      </div>
      <div className="agregado"> 
      <div className="card-body">
      
          <h5 className="card-title">{item.nombre}</h5>
          <p className="card-text">{item.precio}/ caja </p>
          <p className="card-text">Los {item.nombre} vienen por unidades de 6 alfajores por caja.Lorem This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action,
</p>  

   {
  itemCount === 0
  ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd}/>
  :<Link to="/Cart" style={{textDecoration: "none"}}><button className="botonCheck">Checkout</button></Link>
}
      </div></div>
   
    </div>
 
    </div>
  
   }


   </>
  )
    }
