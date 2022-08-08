
import { useState, useEffect } from "react"
import ItemList from "./ItemList"
import {useParams} from "react-router"
import {fireStoreFetch} from "../utils/fireStoreFetch"



function Greeting() {


const [data, setProductList] = useState([])
const { id }= useParams();



  useEffect(()=> {
 fireStoreFetch(id)
  .then(result => setProductList(result))
  .catch(err => console.log(err))
 }, [id]);
  
  

  return (
    <>
    
    <ItemList items={data}/>
    
   
</>

  );
}

export default Greeting;

