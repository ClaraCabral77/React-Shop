import 'bootstrap/dist/css/bootstrap.min.css';
import Icono from "./CardWidget";
import {Icono2} from "./CardWidget";


const NavBar= (props) =>{
    return (
    <>

<nav className="navbar navbar-expand-lg bg-dark">
<Icono />
  <div className="container-fluid">
    <a className="navbar-brand text-light" href="#">Digi Neck</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active text-light" aria-current="page" href="#">{props.nombre}</a>
        <a className="nav-link text-light" href="#">{props.nombre2}</a>
        <a className="nav-link text-light" href="#">{props.nombre3}</a>
        <a className="nav-link text-light" href="#">{props.nombre4}</a>
      </div>
    </div>
  </div>
  <Icono2 />
</nav>


    </>
    );
  }

  export default NavBar;
