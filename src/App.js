import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Signin from './pages/Signin';
import SignUp from './pages/SignUp';
import Checkout from './pages/Checkout';
import Shope from './pages/Shope';
import Private from './utils/Private';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import VeiwProduct from './pages/VeiwProduct';

function App() {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Routes>
        <Route element={<Private />}>
          <Route path='/login' element={<Signin />} />
        </Route>
        <Route path='/' element={<Layout />}>
          <Route index path='' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/shope' element={<Shope />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/viewproduct' element={<VeiwProduct />} />
        </Route>
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
