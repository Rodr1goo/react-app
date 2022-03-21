import React from 'react'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <img src="/logo192.png" alt="logo" className='logo'/>
        <a className='links' href='#'>Inicio</a>
        <a className='links' href='#'>Productos</a>
        <a className='links' href='#'>Nosotros</a>
    </nav>
  )
}

export default Navbar