
import { useState } from "react"
import ItemList from "./ItemList"
import {products} from "./products"



function Greeting(props) {


const [productList, setProductList] = useState([])

let okey = true

const fetchProducts = (time, task) =>{
    return new Promise((resolve, reject) =>{
        if (okey){
            setTimeout(()=>{
                resolve(products)
            }, time);
        } else{
            reject("error")
        }
    });
  }
  
  
  fetchProducts(2000)
    .then(datos =>{setProductList(datos)})
    .catch(err =>{console.log(err)})
  
  

  return (
    <>
    <div className="saludo1">{props.saludo}</div>
    <ItemList items={productList}/>
</>

  );
}

export default Greeting;

