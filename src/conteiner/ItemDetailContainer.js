import React, { useEffect } from 'react'
import { ItemDetail } from './ItemDetail';
import { useState} from 'react';
import { useParams } from 'react-router';
import { fireStoreFetchOne } from '../utils/fireStoreFetch';





const ItemDetailContaier= () => {


const [Undato, setDato] = useState({});
const { detalle }= useParams();



  
  useEffect(()=> {
  

fireStoreFetchOne(detalle)
  .then(result => setDato(result))
   .catch(err => console.log(err))
     }, [detalle]);
          
      
     return (
        <>
        
        <ItemDetail item={Undato}/>
    </>
    
      );
      }

    export default ItemDetailContaier