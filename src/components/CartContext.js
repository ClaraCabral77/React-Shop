import {createContext, useState} from "react";



export const CartContext = createContext ();

const CartContextProvider = ({ children}) =>{


const [cartList, setCartList]= useState([])

const addToCart= (item, NuevaCantidad, ) =>{

   const {cantidad = 0} = cartList.find(prod => prod.id === item.id) || {};
   
   const newCart =  cartList.filter(prod => prod.id !== item.id);
 
   setCartList([...newCart, {...item, cantidad: cantidad + NuevaCantidad}])
    
}

const isInCart= (id) =>{

return cartList.find(item => item.id === id) ? true : false;

}


const removeItem= (id)=>{
let nuevoArray= cartList.filter(item => item.id !== id)
setCartList(nuevoArray)
}

const clear = ()=>{
setCartList([]);
}

const numeroWidget= ()=>{
     for(var i=0; i < cartList.length; i++){

     }
   
}

    return(
<CartContext.Provider value={{cartList, addToCart, removeItem, clear, isInCart, numeroWidget,}}>
{ children }
</CartContext.Provider >

    )
}

export default CartContextProvider