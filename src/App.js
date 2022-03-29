
import './App.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import NavBarBoots from './components/NavBarBoots';
import ItemListContainer from './components/ItemListContainer';
import ItemCounter from './components/ItemCounter';
import ItemList from './components/ItemList';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Contacto from './components/Contacto/Contacto';
import Nosotros from './components/Nosotros/Nosotros';


function App() {
  return (
    <div className="App">

      {/* <Navbar/> */}
      <BrowserRouter>
      
          <NavBarBoots/>


                        <ItemListContainer greetings='Bienvenidos al Viejo Gray!'/>
                        <ItemList/>
                        <ItemDetailContainer/>  
                        <ItemCounter valorInicial={1} stock={5}/>
                        
                        
                        {/* al colocarlos adentro del Routes, se rompe todo.  */}



                <Routes>

                        <Route path="/" element={ <ItemDetailContainer/> } />
                        <Route path="/Contacto" element={ <Contacto/> } />
                        <Route path="/Nosotros" element={ <Nosotros/> } />
                       

                        {/* {<Route path="*" element={<h1> ERROR 404</h1>}/>} */}


                  </Routes>
      
          </BrowserRouter>


    </div>
  );
}

export default App;
