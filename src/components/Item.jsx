import React, {useState} from 'react'
import ItemCounter from './ItemCounter'
import { useNavigate } from 'react-router-dom'

const Item = ({producto}) => {

  const navegar = useNavigate();
 
    const{name, img, description, stock} = producto

    const [show, setShow] = useState(false)

    const verMas = () => {
        console.log(show)
        setShow(!show)
    }

    const onAdd = () => {
        console.log('agregue al carrito.')
    }

  return (

    <div className='col'>
        <div className='card-body' style={{width: '18rem'}}>
        
            <img src={img} className=" card-img-top " alt="..." />

                    <div className=' card-body'>
                            <p className='  card-titulo card h-100 card-body'>{name}</p>
                            <p>{description}</p>
                            <button className=' BtnItem' onClick={verMas}>{show ? 'Ver menos' : 'Ver mas'} </button>
                            <ItemCounter stock={stock} valorInicial={1} onAdd={onAdd}/>

                            <button className= 'btn btn-success' onClick={()=>navegar(`/detalles/${producto.id}`)}>VER DETALLES</button>
                    </div>
        
        </div>
    </div>
        
        
        
  )
}

export default Item