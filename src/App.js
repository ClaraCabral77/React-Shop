
import './App.css';
import NavBar from "./components/NavBar";


function App() {
  return (
    <div className="App">
      <header>
        <nav>  <h1> Digi Neck </h1>
        <NavBar nombre="Productos" nombre2="Carrito" />
        <NavBar nombre="Quienes somos" nombre2="Contacto" />
      <hr></hr>

        </nav>
       
      </header>
    </div>
  );
}

export default App;
