
import { useState, useEffect } from "react"
import ItemList from "./ItemList"
import {useParams} from "react-router"
import {fireStoreFetch} from "../utils/fireStoreFetch"



function Greeting(props) {


const [data, setProductList] = useState([])
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
  
    
  
   // if (id === undefined){
 
   //   fetchProducts(2000, products)
   //    .then(datos =>{setProductList(datos)})
  //     .catch(err =>{console.log(err)})
 //}
  //  else{
   //  fetchProducts(2000, products.filter(item => item.categoryId == (id)))
    //   .then(datos =>{setProductList(datos)})
   //   .catch(err =>{console.log(err)})
 
  //  }
  
  useEffect(()=> {
 fireStoreFetch(id)
  .then(result => setProductList(result))
  .catch(err => console.log(err))
 }, [id]);
  
  const onAdd= (param) => {console.log(`La cantidad comprada es${param}`)}

  return (
    <>
    
    <ItemList items={data}/>
    
   
</>

  );
}

export default Greeting;

