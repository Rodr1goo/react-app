import React from 'react'

const ItemDetail = ({productDetail}) => {
    const {name, description, img} = productDetail
  return (
    <div>
        <h2>Detalle del producto : {name}</h2>
        <img src={img} alt={name} />
        <p>{description}</p>
    </div>
  )
}

export default ItemDetail