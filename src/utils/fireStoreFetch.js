import {query, orderBy, where,collection, getDocs} from "@firebase/firestore";
import {db} from "../utils/FirebaseConfig"
import { doc, getDoc } from "firebase/firestore";

export const fireStoreFetch = async (id)=>{
    let q;
    if(id){
        q= query(collection(db, "productos"), where("categoryId", "==", id))
    }else{
        q= query(collection(db, "productos"), orderBy("nombre"))
    }

    const querySnapshot= await getDocs(q);
    const dataFromFirestore= querySnapshot.docs.map((doc) => ({
        id: doc.id,
         ...doc.data()
        
      }));
      return dataFromFirestore

}

export const fireStoreFetchOne= async(detalle) =>{
    const docRef= doc(db, "productos", detalle);
    const docSnap= await getDoc(docRef);

    if(docSnap.exists()){
        return{
            id: detalle,
            ...docSnap.data()
        }
    }else{
console.log("no document")
    }
}