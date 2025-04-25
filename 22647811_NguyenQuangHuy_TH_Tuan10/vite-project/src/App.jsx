import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Ui/Counter/Counter'
import TodoList from "./components/Ui/TodoList/TodoList"
import ToggleTheme from './components/Ui/ToggleTheme/ToggleTheme'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Cart from './components/Ui/Cart/Cart';
import ShoppingCart from './components/Ui/Cart/ShoppingCart';
import CartContext from './components/Ui/Cart/CartContext'

function App() {
  return (
    <Router>
      <CartContext>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Sản phẩm</Link>
            </li>
            <li>
              <Link to="/cart">Giỏ hàng</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Cart />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
      </div>
      </CartContext>
    </Router>
  );
}


export default App
