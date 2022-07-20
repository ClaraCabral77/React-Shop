import 'bootstrap/dist/css/bootstrap.min.css';
import Icono from "./CardWidget";
import {Icono2} from "./CardWidget";
import {Link} from "react-router-dom"


const NavBar= (props) =>{
    return (
    <>

<nav className="navbar navbar-expand-lg bg-dark">
<Icono />
  <div className="container-fluid">
   <Link to="/"className="titulo">Macarrones Heak</Link>
  
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link to="/category/2" className="categorias" aria-current="page" href="#">{props.nombre}</Link>
        <Link to="/category/6" className="categorias" href="#">{props.nombre2}</Link>
        <Link to="/category/1" className="categorias" href="#">{props.nombre3}</Link>
        <Link to="/category/4" className="categorias" href="#">{props.nombre4}</Link>
      </div>
    </div>
  </div>
  <Icono2 />
</nav>


    </>
    );
  }

  export default NavBar;
