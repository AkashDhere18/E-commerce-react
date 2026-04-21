import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import  LoginPage  from './pages/LoginPage';
import  RegistrationPage  from './pages/RegistrationPage';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage setLoggedUser={setLoggedUser}/>}></Route>
          <Route path='/register' element={<RegistrationPage  />}></Route>
          <Route path='/dashboard' element={<Dashboard loggedUser={loggedUser} />}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App