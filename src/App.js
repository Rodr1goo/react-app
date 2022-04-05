
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import NavBarBoots from './components/NavBarBoots';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';




function App() {
  return (   
      <BrowserRouter>
      
          <NavBarBoots/>

                <Routes>
                          <Route path='/' element={<Home/>}/>
                          <Route path='/productos' element={<ItemListContainer greetings='Bienvenidos al Viejo Gray!'/>}/>
                          <Route path='/categoria/:categoryId' element={<ItemListContainer greetings='Bienvenidos al Viejo Gray!'/>}/>
                          <Route path='/detalles/:id' element={<ItemDetailContainer/>}/>
                          <Route path='/nosotros' element={<Nosotros/>} />
                          <Route path='/contacto' element={<Contacto/>} />                     
                  </Routes>
      
          </BrowserRouter>
  );
}

export default App;
