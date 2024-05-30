import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import Hisobotlar from './pages/ownerPage/hisobotlar/Hisobotlar'
import Register from './components/register/Register'

const App = () => {
  return (
    <div>
      < Routes>
        <Route exect path='/' element={<Home />} />
        <Route exect path='/hisobot' element={<Hisobotlar/>} />
        <Route exect path='/register' element={<Register/>}/>
      </Routes>
    </div>
  )
}

export default App
