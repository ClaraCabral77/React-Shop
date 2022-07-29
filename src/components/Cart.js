import React from 'react'
import { CartContext } from './CartContext';
import { useContext } from 'react';



const Cart = () => {

  const test= useContext(CartContext);
  console.log(test.cartList)
console.log(test.totalProducts())
console.log(test.totalPrice())
 
 
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
          <p className="card-text-cart">Precio final es de : {test.totalPrice()}  </p>
          <button className="delete"onClick={() => test.removeItem(item.id)}> Delete </button>

        
</div>
</div>
</div>
 </div>
 <div>
  
 {test.totalProducts()}
 </div>

 
        </>

      ))
      
    }

</>

    
  );
}




export default Cart

