import React, { useEffect, useState } from 'react'
import { obtenerProductos } from '../mocks/FakeApi'

// MUY IMPORTANTE NO BORRAR EL PROPS ENTRE PARENTESIS  PARA QUE FUNCIONE.



// const [cargando, setCargando] = useState(false) 

// useEffect(()=>{
//   setCargando(true)
//   obtenerProductos
//   .then((res) => setListaProductos (res) )
//   .catch((error) => console.log(error))
//   .finally(() => setCargando(false))
// }, [])


const ItemListContainer = (props) => { 
    const {greetings} = props
  return (
    <div>
        <h1 className='h1-titulo'>
            {greetings}
        </h1>
    </div>
  )
}

export default ItemListContainer