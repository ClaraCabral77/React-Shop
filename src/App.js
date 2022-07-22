
import './App.css';
import NavBar from "./components/NavBar";
import ItemDetailContaier from './conteiner/ItemDetailContainer';
import Greeting from "./conteiner/ItemListContainer";
import { Routes, Route} from "react-router-dom";
import ItemListContainer from "./conteiner/ItemListContainer";
import Cart from "./components/Cart"


function App() {
  return (
    <div className="App">
      
      
        <nav>  <h1> </h1>
        <NavBar nombre="Cajas por 6" nombre2="Cajas por 12" nombre3="Por Unidades" nombre4="Detalle" />
    
        <Routes>
        
          <Route path="/category/:id" element={<ItemListContainer/>}/>
          <Route path="/item/:id" element={<ItemDetailContaier/>}/>
          <Route path="/Cart" element={<Cart/>}/>

        </Routes>
        
        
        </nav> 
      

        <div className="flexbox">
        
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        </Routes>
        
        </div>
      
    </div>
  );
}

export default App;
