import React, { useEffect , useState} from 'react'
import { obtenerProductos } from '../mocks/FakeApi'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

    const [productDetail, setProductDetail] = useState({})

    const [cargando, setCargando] = useState (false)

    const { id } = useParams()
  





    useEffect(()=>{
        setCargando(true)
        obtenerProductos

        .then((res) => setProductDetail(res.find((item) => item.id === id )))
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
// .then((res)=>{
//   if(categoryId) {
//     setProductDetail( res.filter( (productDetail) => productDetail.category === categoryId))
//   } else {
//       setProductDetail (res)
//   }
// })