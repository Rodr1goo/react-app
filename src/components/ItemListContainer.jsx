import React, { useEffect, useState } from 'react'
import { obtenerProductos } from '../mocks/FakeApi'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'

// MUY IMPORTANTE NO BORRAR EL PROPS ENTRE PARENTESIS  PARA QUE FUNCIONE.


const ItemListContainer = (props) => {
    const {greetings} = props

    const [listaProductos, setListaProductos] = useState ([])

    
    const [cargando, setCargando] = useState(true)

    const {categoryId} = useParams(); 



    
    
    
    // ahora ejemplo real para que funcione optimo todo.
    
    useEffect (() => {
        obtenerProductos
        .then((respuesta) => {
          if (!categoryId) {
            setListaProductos(respuesta)
          } else {
            setListaProductos(respuesta.filter((producto)=>producto.category === categoryId))
          }
        })
        .catch((error) => console.log(error))
        .finally(() => setCargando(false))
    }, [categoryId])   //SE PONE EL ARRAY DE DEPENDENCIA PARA QUE NO SE EJECTUE BUCLE INFINITO.

  return (
    <div>
        <h1 className='h1-titulo'>
            {greetings}
        </h1>
        {cargando ? <p> CARGANDO LA PAG </p> : <ItemList listaProductos={listaProductos}/>} 
    </div>
  )
}

export default ItemListContainer