
import './App.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import NavBarBoots from './components/NavBarBoots';
import ItemListContainer from './components/ItemListContainer';
import ItemCounter from './components/ItemCounter';
import ItemList from './components/ItemList';


function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <NavBarBoots/>

      <ItemListContainer greetings='Bienvenidos al Viejo Gray!'/>

      <ItemCounter valorInicial={1} stock={5}/>

      <ItemList/>


    </div>
  );
}

export default App;
