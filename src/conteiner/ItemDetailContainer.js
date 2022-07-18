import React, { useEffect } from 'react'
import { products } from './products';
import { ItemDetail } from './ItemDetail';
import { useState } from 'react';



const ItemDetailContaier= () => {


const [Undato, setDato] = useState({});


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
        fetchProducts(2000, products[1])
        .then(datos =>{setDato(datos)})
        .catch(err =>{console.log(err)})
    }, []);
      
      
    
      return (
        <>
        
        <ItemDetail item={Undato}/>
    </>
    
      );
      }

    export default ItemDetailContaier