import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Cart from './pages/cart';
import Checkout from './pages/checkout';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>

        <Route path='/cart' element={<Cart/>}/>

        <Route path='/checkout' element={<Checkout/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
