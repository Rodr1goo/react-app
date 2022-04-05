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
    <li className="nav-item dropdown">
          <p className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Productos
          </p>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to='/categoria/Anatomia'>Anatomía</Link></li>
            <li><Link className="dropdown-item" to='/categoria/Neuroanatomia'>Neurología</Link></li>
            <li><Link className="dropdown-item" to='/categoria/Histologia'>Histología</Link></li>
            <li><Link className="dropdown-item" to='/productos'>Todos los productos</Link></li>
          </ul>
        </li>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
         <li className="nav-item">
          <Link className="nav-link" to='/nosotros'>Nosotros</Link>
        </li>
         <li className="nav-item">
          <Link className="nav-link" to='/contacto'>Contacto</Link>
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