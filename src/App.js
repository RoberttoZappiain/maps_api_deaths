
import './App.css';
import './index.css'
import Login from './components/auth/Login';
import Registro from './components/auth/Registro';
import NewPost from './components/NewPost'; 
import {BrowserRouter,  Route, Routes} from "react-router-dom"
import HomePage from './components/HomePage';
import { AppProvider } from './context/AppProvider';

function App() {
 
  return (
    <div className='container mx-auto '>
      <BrowserRouter>
        <AppProvider>
          <Routes>
            <Route path="/register" element={<Registro />}/>
            <Route path="/login" element={ <Login />}/>
            <Route path="/" element={ <HomePage />}/>
            <Route path="/crear-post" element={ <NewPost />}/>
          </Routes>
        </AppProvider>
      </BrowserRouter>
      </div>
  );
}

export default App;
