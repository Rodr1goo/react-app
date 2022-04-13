import React, { useEffect } from 'react'





const Contacto = () => {
  const handleClick = () => {
    console.log('Click')
  }
  
  
  
  
  
    useEffect(() => {
  
     window.addEventListener('Click', handleClick)
  
     return () => {
    window.removeEventListener('Click', handleClick)
     }
  
   }, [])
  return (
    <div onClick={handleClick}> 
      <h2> Contacto </h2>
    </div>
  )
}

export default Contacto