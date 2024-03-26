import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import Layout from './components/layout/Layout'
import AddProducts from './pages/adminPage/addProducts/AddProducts'

const App = () => {
  return (
    <div>

      < Routes>
        <Route path='/' element={<Home />} />
        <Route path='/addProducts' element={<AddProducts />} />
        {/* <Route />
        <Route /> */}
      </Routes>
    </div>
  )
}

export default App
