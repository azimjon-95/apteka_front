import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import Hisobotlar from './pages/ownerPage/hisobotlar/Hisobotlar'

const App = () => {
  return (
    <div>
      < Routes>
        <Route exect path='/' element={<Home />} />
        <Route exect path='/hisobot' element={<Hisobotlar/>} />
        <Route />
      </Routes>
    </div>
  )
}

export default App
