import { Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar";
import ProductDetail from "./Components/Product/ProductDetail";
import Cart from "./Components/Cart/Cart";
import Home from "./Pages/Home";
import CategoryStore from "./Pages/CategoryStore";
import ProductsStore from "./Pages/ProductsStore";
import Generic from "./Pages/Generic";
import CartProvider from './context/CartContext'
import './App.css'

function App() {
  return (
    <>
      <CartProvider>
        <header><Navbar /></header>

        <main className="d-flex justify-content-center align-items-center flex-column">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route exact path='/cart' element={<Cart />} />
            <Route exact path='/category' element={<CategoryStore />} />
            <Route exact path="/products" element={<ProductsStore />} />
            <Route exact path="/category/:categoryId" element={<CategoryStore />} />
            <Route exact path="/products/:productId" element={<ProductDetail />} />
            <Route path="/*" element={<Generic />} />
          </Routes>
        </main>
      </CartProvider>
    </>
  )
}

export default App
