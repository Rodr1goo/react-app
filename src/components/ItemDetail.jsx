import React from 'react'
import ItemCounter from './ItemCounter'
import { useNavigate } from 'react-router-dom'

const ItemDetail = ({productDetail}) => {

  const volver = useNavigate();

    const {name, description, img} = productDetail
  return (
    <div>
        <h2>Detalle del producto : {name}</h2>
        <img className="card-img-top" className="imagenes" src={img} alt={name} />
        <p>{description}</p>
        <h2>agregar producto al carrito : {ItemCounter}</h2>
        <button className='btn btn-info' onClick={() => volver('/productos')}>Volver atrás</button>
    </div>
  )
}

export default ItemDetail