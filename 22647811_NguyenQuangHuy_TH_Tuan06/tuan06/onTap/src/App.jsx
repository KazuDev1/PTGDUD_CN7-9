import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router,Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Details from "../pages/Details"
import Cart from "../pages/Cart"
import Header from "../components/Header"
import Footer from "../components/Footer"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
          <Header />
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/Details/:id' element={<Details />} />
              <Route path='/Cart' element={<Cart />} />
              <Route path='*' element={<h2>Page Not Founded</h2>} />
          </Routes>
          <Footer />
      </Router>
    </>
  )
}

export default App
