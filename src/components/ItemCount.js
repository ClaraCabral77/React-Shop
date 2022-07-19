
import React, {useState} from "react";

//let rates= 0;
const ItemCount= (props) =>{



const [rates, setRates] = useState(1) 

const stock= rates <= 5;

const handleClickPositivo=() =>{
 
  setRates(rates + 1)
}

const handleClick=() =>{
 
      setRates(rates - 1)
  }
    return (

    <div className= "seccionContador">
      
    <button className="botonesContador" onClick={handleClick}>
         -
    </button> {rates}


    <button className="botonesContador" onClick={handleClickPositivo}>
      
         +
    </button> 
    


    <p>{ stock ? "" : alert("Ha alcanzado el máximo de stock")}</p>

  
    </div>
    
   
    
      )

  ;

}

  

 export default ItemCount;

