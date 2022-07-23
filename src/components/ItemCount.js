
import React, {useState} from "react";

//let rates= 0;
const ItemCount = ( {initial, stock, onAdd} ) => {

  const [counter, setCounter] = useState(initial);

  const inc = () =>{
      if(counter < stock ){
          const aux = counter+1
          setCounter(aux);
  }
}
  const dec = () =>{
      if(counter > initial ){
          const aux = counter-1
          setCounter(aux);
  }
}
return (
  <div className="seccionContador" >
      <div className="counter">
          <button className="botonesContador" onClick={dec}>-</button>
          <span className="numeroContador">{counter}</span>
          <button className="botonesContador"  onClick={inc}>+</button>
      </div>
      {
        stock && counter
        ? <button className="botonCarrito" onClick={()=>onAdd(counter)}>Add to cart</button>
        :<button type="button" className="desabilitado"disabled >Add to cart</button>
        }
      
  </div>
  )
}
  

 export default ItemCount;

