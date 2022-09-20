import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Cadastro from './views/Cadastro'
import Login from './views/Login'
import Dashboard from './views/Dashboard'
import CreateTransaction from './views/CreateTransaction'
import EditTransaction from './views/EditTransaction'
import Error from './views/Error'
import UserProfile from './views/UserProfile'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/perfil/:id" element={<UserProfile />} />
        {/* <Route path="/edicao/perfil/:id" element={<EditUserProfile />} /> */}
        <Route path="/registro/transacao" element={<CreateTransaction />} />
        <Route path="/edicao/transacao/:id" element={<EditTransaction />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
