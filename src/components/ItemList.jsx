import Item from './Item'

const ItemList = ({listaProductos}) => {
    
    
    console.log(listaProductos)
    
    
    return(
        <div className='d-flex row row-cols-1 row-cols-md-3 g-4' >
            

            {/* si cargando que es mi variable es true, entonces poneme el P que diga cargando, de lo contrario, no hagas nada  */}

            {listaProductos.map((producto) => <Item producto={producto} key={producto.id}/>)}

        </div>
    )
    
}





export default ItemList

