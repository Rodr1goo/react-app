import React, { useEffect , useState} from 'react'
import { obtenerProductos } from '../mocks/FakeApi'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    const [productDetail, setProductDetail] = useState({})

    const [cargando, setCargando] = useState (false)

    useEffect(()=>{
        setCargando(true)
        obtenerProductos
        .then((res) => setProductDetail(res.find((item) => item.id === '02' )))
        .catch ((error) => console.log(error))
        .finally (() => setCargando(false))
        
    }, [])

    



  return (
    
    <div>
        {cargando ? <p>CARGANDO</p> : <ItemDetail productDetail={productDetail}/>}
        
    </div>
    
  )
}

export default ItemDetailContainer