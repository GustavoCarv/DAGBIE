import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './views/Home'
import Cadastro from './views/Cadastro'
import Login from './views/Login'
import Dashbord from './views/Dashbord'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/Dashbord" element={<Dashbord />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
