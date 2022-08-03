import React from 'react'
import { CartContext } from './CartContext';
import { useContext } from 'react';
import { serverTimestamp } from 'firebase/firestore';
import {query, orderBy, where,collection, getDocs} from "@firebase/firestore";
import {db} from "../utils/FirebaseConfig"
import { doc, setDoc, updateDoc, increment} from "firebase/firestore";



const Cart = () => {

  const test= useContext(CartContext);


  const createOrder=()=>{
    let itemsForCart= test.cartList.map(item=> ({
id: item.id,
title:item.nombre,
price: item.precio,
cantidad: item.cantidad
    }))
let order= {
      buyer:{
        email: "cabralclara77@gmail.com",
        name: "Clara",
        phone: 1156247796,
},
    date: serverTimestamp(),
    item:  itemsForCart,
    total: test.totalPrice()
    }
    

  const createOrderInFirestore= async()=>{
    const newOrderRef= doc(collection(db, "orders", ))
    await setDoc(newOrderRef, order)
    return (newOrderRef)
  }

  createOrderInFirestore()
  .then(result => alert("your order has been created. Id=" + result.id ))
  .catch(err => console.log(err))


  test.cartList.forEach(async(item)=>{
    const itemRef= doc(db, "productos", item.id)
    await updateDoc(itemRef,{ 
      stock: increment(-item.cantidad)
    })
  })

  console.log(test.cartList)
console.log(test.totalProducts())
console.log(test.totalPrice())


test.clear()


 
}
    if(test.cartList.length === 0){
      return(
    <>
    <h2>No hay productos agregados</h2>
    </>
  )
}


  return (
    <>

<h1 className="tituloCarrito">Carrito</h1>
<button className="deleteAll" onClick={test.clear}> Delete All</button>
    {
      test.cartList.length > 0 && test.cartList.map(item => (
<>
     <div className="detailcard">
      <div className="row row-cols-1 row-cols-md-3 g-4">
    <div className="col">
      <div className="card h-100">
      <img src={item.imagen}/>
        <div className="card-body">
          <h5 className="card-title">{item.nombre}</h5>
          <p className="card-text">Con tu compra slkddl wdknwld dlwdknwldk wdlkwlksm wldknwld wldnwld</p>
          
          
       
        
        </div>
        
        </div>
      </div>
      <div className="agregadoFinal"> 
      <div className="card-body">
      
          <h5 className="card-title-cart">{item.nombre}</h5>
          <p className="card-text-cart">Los {item.nombre} vienen pction</p>
          <p className="card-text-cart">{item.cantidad} cajas</p>
          <p className="card-text-cart">Precio: ${test.subtotal(item.cantidad, item.precio)}  </p>
          <button className="delete"onClick={() => test.removeItem(item.id)}> Delete </button>

        
</div>
</div>


</div>
 </div>
 <div>
  

 </div>

 
        </>

      ))
      
    }
    <div className="agregadoFinal2"> 
      <div className="card-body">
      <p className="parrafoCheck">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action</p>
      <p className="card-text-cart2">Precio final es de: ${test.totalPrice()}  </p>
          <button onClick={createOrder} className="delete2"> Comprar </button>

        
</div>
</div>

</>

    
  );
}




export default Cart

