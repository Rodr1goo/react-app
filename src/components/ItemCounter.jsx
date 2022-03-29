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
    <div >
      <h5>Seleccione cantidad.</h5>
      <button  className='BtnCounter' onClick={restar}>-</button>
      <span className='counter'>{contador}</span>
      <button className='BtnCounter' onClick={sumar}>+</button>
    </div>
  )
}

export default ItemCounter