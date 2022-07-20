
import { useState, useEffect } from "react"
import ItemList from "./ItemList"
import {products} from "./products"
import {useParams} from "react-router"


function Greeting(props) {


const [productList, setProductList] = useState([])
const { id }= useParams();

let okey = true

const fetchProducts = (time, task) =>{
    return new Promise((resolve, reject) =>{
        if (okey){
            setTimeout(()=>{
                resolve(task)
            }, time);
        } else{
            reject("error")
        }
    });
  }
  
  useEffect(()=> {
    if (id === undefined){

      fetchProducts(2000, products)
      .then(datos =>{setProductList(datos)})
      .catch(err =>{console.log(err)})
    }
    else{
      fetchProducts(2000, products.filter(item => item.categoryId == (id)))
      .then(datos =>{setProductList(datos)})
      .catch(err =>{console.log(err)})

    }
  
  }, [id]);
  

  return (
    <>
    <div className="saludo1">{props.saludo}</div>
    <ItemList items={productList}/>
</>

  );
}

export default Greeting;

