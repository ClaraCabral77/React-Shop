
import './App.css';
import NavBar from "./components/NavBar";
import Greeting from "./conteiner/ItemListContainer";






function App() {
  return (
    <div className="App">
      <header>
        <nav>  <h1> </h1>
        <NavBar nombre="Productos" nombre2="Carrito" nombre3="Quienes somos" nombre4="Contacto" />
        
        </nav> 
        </header>
       
        <div>
        <Greeting saludo="¡Bienvenidxs!"/>
        
        
        
   
        
        </div>
      
    </div>
  );
}

export default App;
