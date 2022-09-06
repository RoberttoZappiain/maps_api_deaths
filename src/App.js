
import './App.css';
import './index.css'
import Aside from './components/Aside';
import Cards from './components/Cards';
import Map from './components/Map';
import Navegacion from './components/Navegacion';

function App() {
 
  return (
    <div className='container mx-auto '>
      
      <Navegacion />
      <Aside />
      <Cards/>
      <Map />
    </div>
  );
}

export default App;
