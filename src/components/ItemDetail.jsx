import React from 'react'
import ItemCounter from './ItemCounter'
import { useNavigate } from 'react-router-dom'

const ItemDetail = ({productDetail}) => {

  const volver = useNavigate();

    const {name, description, img, stock} = productDetail

    const onAdd = () => {
      console.log('agregue al carrito.')
  }

  return (
    <div>
        <h2>Detalle del producto : {name}</h2>
        <img className="imagenes" src={img} alt={name} />
        <p>{description}</p>
        <ItemCounter stock={stock} valorInicial={1} onAdd={onAdd}/>
        <button className='btn btn-info' onClick={() => volver('/productos')}>Volver atrás</button>
    </div>
  )
}

export default ItemDetail