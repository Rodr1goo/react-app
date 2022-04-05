
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import NavBarBoots from './components/NavBarBoots';
import ItemListContainer from './components/ItemListContainer';
import ItemCounter from './components/ItemCounter';
import ItemList from './components/ItemList';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';

import Item from './components/Item';




function App() {
  return (   
      <BrowserRouter>
      
          <NavBarBoots/>


                        {/* <ItemListContainer greetings='Bienvenidos al Viejo Gray!'/>
                        <ItemList/>
                        <ItemDetailContainer/>  
                        <ItemCounter valorInicial={1} stock={5}/> */}
                        
                        
                        {/* al colocarlos adentro del Routes, se rompe todo.  */}



                <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/productos' element={<ItemList/>}/>
                  <Route path='/category/:categoryId' element={<ItemList/>}/>
                  <Route path='/detalles/:id' element={<ItemDetailContainer/>}/>
                  <Route path='/src/pages/nosotros' element={<Nosotros/>} />
                  <Route path='/src/pages/contacto' element={<Contacto/>} />

                        {/* <Route path="/" element={ <ItemDetailContainer/> } />
                        <Route path="/category/:categoryId" element={ <ItemDetailContainer/> } />
                        <Route path="/Contacto" element={ <Contacto/> } />
                        <Route path="/Nosotros" element={ <Nosotros/> } /> 

                        <Route path="*" element={ <Navigate to="/" /> }/> */}


                  </Routes>
      
          </BrowserRouter>
  );
}

export default App;
