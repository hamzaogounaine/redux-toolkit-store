import React from 'react'
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Cart from './Cart'

const App = () => {
  return (
    <BrowserRouter >
      <Navbar />
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App