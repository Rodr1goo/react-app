import React, {useEffect, useState} from 'react'
import Item from './Item'

const ItemList = ({card}) => {


    const [listaProductos, setListaProductos] = useState ([])


    const [cargando, setCargando] = useState(true)


    const productos = [

            {id:'01', name: 'random1', description:"sarasa", img:'https://picsum.photos/200'},
            {id:'02', name: 'random2', description:"sarasa", img:'https://picsum.photos/201'},
            {id:'03', name: 'random3', description:"sarasa", img:'https://picsum.photos/202'},
            {id:'04', name: 'random4', description:"sarasa", img:'https://picsum.photos/203'},
            {id:'05', name: 'random5', description:"sarasa", img:'https://picsum.photos/204'},
            {id:'06', name: 'random6', description:"sarasa", img:'https://picsum.photos/205'}

    ]
    
    const obtenerProductos = new Promise ((resolve, reject)=>{

            //aca se ponen las acciones a realizar
            let condition = true

            if  (condition) {
                setTimeout(() => {
                    resolve (productos)
                }, 3000);
            }else {
                reject('no funciona')
            }


    })
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
        <div>
            <h2>Lista de productos!</h2>

            { cargando ? <p>Cargando... </p> : listaProductos.map((producto) => <Item producto={producto} key={producto.id}/>)}

        </div>
    )

}






export default ItemList