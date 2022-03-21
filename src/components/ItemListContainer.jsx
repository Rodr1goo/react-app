import React from 'react'

// MUY IMPORTANTE NO BORRAR EL PROPS ENTRE PARENTESIS  PARA QUE FUNCIONE.

const ItemListContainer = (props) => { 
    const {greetings} = props
  return (
    <div>
        <h1>
            {greetings}
        </h1>
    </div>
  )
}

export default ItemListContainer