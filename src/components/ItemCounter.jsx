import React, {useState} from 'react'

const ItemCounter = ({valorInicial, stock}) => {

    const [contador, setContador] = useState(valorInicial)

  const sumar = () =>{

    if (contador < stock){

      setContador ( contador + 1)

    }
 
  }


  const restar = () =>{

    if (contador > 0){
      
      setContador (contador - 1)

    }

  }

   return (
    <div>
      <button onClick={restar}>-</button>
      <span>{contador}</span>
      <button onClick={sumar}>+</button>
    </div>
  )
}

export default ItemCounter