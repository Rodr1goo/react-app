import React from 'react'
import Carrito from './Carrito'
import { Link } from 'react-router-dom';

const NavBarBoots = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
    <Link to='/'>
        <img src="/logo192.png" alt="logo" className='logo' />
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" to='/productos'>Productos</Link>
        </li>
         <li className="nav-item">
          <Link className="nav-link" to='/src/pages/nosotros'>Nosotros</Link>
        </li>
         <li className="nav-item">
          <Link className="nav-link" to='/src/pages/contacto'>Contacto</Link>
        </li> 
        
      </ul>
      <Carrito/>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Buscar Producto" aria-label="Buscar"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default NavBarBoots