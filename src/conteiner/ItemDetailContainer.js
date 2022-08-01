import React, { useEffect } from 'react'
import { products } from './products';
import { ItemDetail } from './ItemDetail';
import { useState} from 'react';
import { useParams } from 'react-router';





const ItemDetailContaier= () => {


const [Undato, setDato] = useState([]);
const { detalle }= useParams();



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

 //       const fireStoreFetch= async() =>{
  //          const querySnapshot = await getDocs(collection(db, "productos"));
   //         const dataFromFirestore= querySnapshot.docs.map((doc) => ({
   //           id: doc.id,
   //          ...doc.data()
            
 //         }));
  //        return dataFromFirestore
  //          }
          
      //      fireStoreFetch()
      //      .then(result => setDato(result))
      //      .catch(err => console.log(err))
      //      }, [detalle]);

        fetchProducts(2000, products.find((item) => item.id === parseInt(detalle)))
        .then(datos =>{setDato(datos)})
        .catch(err =>{console.log(err)})
    }, [detalle]);
      
      
     return (
        <>
        
        <ItemDetail item={Undato}/>
    </>
    
      );
      }

    export default ItemDetailContaier