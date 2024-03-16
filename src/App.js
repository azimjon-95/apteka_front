import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'

const App = () => {
  return (
    <div>
      < Routes>
        <Route exect path='/' element={<Home />} />
        <Route />
        <Route />
      </Routes>
    </div>
  )
}

export default App
