
import './App.css';
import NavBar from "./components/NavBar";
import Icono from "./components/CardWidget";


import Greeting from "./conteiner/ItemListContainer";



function App() {
  return (
    <div className="App">
      <header>
        <nav>  <h1> </h1>
        <NavBar nombre="Productos" nombre2="Carrito" nombre3="Quienes somos" nombre4="Contacto" /> 
        <Greeting saludo="¡Bienvenidxs!"/>
      
      <hr></hr>

        </nav>
       
      </header>
    </div>
  );
}

export default App;
