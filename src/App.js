
import { BrowserRouter, Route , Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Cart from './Components/Cart';


function App() {
  return (
    
    <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/' element = { <Home/>} />
          <Route path='/Cart' element = { <Cart/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
