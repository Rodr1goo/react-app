import React, {useState} from 'react'
import ItemCounter from './ItemCounter'

const Item = ({producto}) => {
 
    const{name, img, description} = producto

    const [show, setShow] = useState(false)

    const verMas = () => {
        console.log(show)
        setShow(!show)
    }

    const onAdd = () => {
        console.log('agregue al carrito.')
    }

  return (
    <div className='card' style={{width: '18rem'}}>
        
        <img src={img} className="card-img-top" alt="..." />

        <div className='card-body'>
            <p className='card-text'>{name}</p>
            <p>{description}</p>
            <button onClick={verMas}>{show ? 'Ver menos' : 'Ver mas'} </button>
            <ItemCounter stock={5} initial={1} onAdd={onAdd}/>
        </div>
        
        
        
        </div>
  )
}

export default Item