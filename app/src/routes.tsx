import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './views/Home'
import Cadastro from './views/Cadastro'
import Login from './views/Login'
import Dashboard from './views/Dashboard'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
