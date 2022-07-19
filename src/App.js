
import './App.css';
import NavBar from "./components/NavBar";
import ItemDetailContaier from './conteiner/ItemDetailContainer';
import Greeting from "./conteiner/ItemListContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ItemListContainer from "./conteiner/ItemListContainer";


function App() {
  return (
    <div className="App">
      
        <nav>  <h1> </h1>
        <NavBar nombre="Productos" nombre2="Carrito" nombre3="Quienes somos" nombre4="Contacto" />
     
        
        </nav> 
      

       
        <div>
        
        {/*<Greeting saludo="¡Bienvenidxs!"/>*/}

        <ItemDetailContaier />
        
        </div>
      
    </div>
  );
}

export default App;
