
import { useState, useEffect } from "react"
import ItemList from "./ItemList"
import { products } from "./products"
import {useParams} from "react-router"
//import {db} from "../utils/FirebaseConfig"
//import { collection, getDocs } from "firebase/firestore";



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
 // const fireStoreFetch= async() =>{
 // const querySnapshot = await getDocs(collection(db, "productos"));
 // const dataFromFirestore= querySnapshot.docs.map((doc) => ({
//    id: doc.id,
 //  ...doc.data()
  
//}));
//return dataFromFirestore
 // }

 // fireStoreFetch()
 // .then(result => setProductList(result))
 // .catch(err => console.log(err))
 }, [id]);
  
  const onAdd= (param) => {console.log(`La cantidad comprada es${param}`)}

  return (
    <>
    
    <ItemList items={data}/>
    
   
</>

  );
}

export default Greeting;

