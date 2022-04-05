import React, {useEffect, useState} from 'react'
import Item from './Item'
import { obtenerProductos } from '../mocks/FakeApi'



const ItemList = ({card}) => {
    
    
    const [listaProductos, setListaProductos] = useState ([])

    
    const [cargando, setCargando] = useState(true)
    
    
    
    // console.log(obtenerProductos)
    
    
    // ahora ejemplo real para que funcione optimo todo.
    
    useEffect (() => {
        obtenerProductos
        .then((respuesta) => setListaProductos(respuesta))
        .catch((error) => console.log(error))
        .finally(() => setCargando(false))
    }, [])   //SE PONE EL ARRAY DE DEPENDENCIA PARA QUE NO SE EJECTUE BUCLE INFINITO.
    
    
    console.log(listaProductos)
    
    
    return(
        <div className='d-flex row row-cols-1 row-cols-md-3 g-4' >
            

            {/* si cargando que es mi variable es true, entonces poneme el P que diga cargando, de lo contrario, no hagas nada  */}

            { cargando ? <p>Cargando... </p> : listaProductos.map((producto) => <Item producto={producto} key={producto.id}/>)}

        </div>
    )
    
}





export default ItemList

