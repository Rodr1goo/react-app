import React from 'react'
import Carrito from './Carrito'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <img src="/logo192.png" alt="logo" className='logo'/>
        <Link to="/" className='links' > Productos</Link>
        <Link to="/src/components/Nosotros/Nosotros.jsx"className='links' > Nosotros</Link>
        <Link to="/src/components/Contacto/Contacto.jsx" className='links' > Contacto</Link>
    </nav>
  )
}

export default Navbar