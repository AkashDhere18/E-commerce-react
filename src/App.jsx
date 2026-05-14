import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from  'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegistrationPage from './pages/RegistrationPage'
import Dashboard from './pages/Dashboard'
import ProductDetails from './components/ProductDetails'


const App = () => {
  const [loggeduser, setLoggeduser] = useState()
  // console.log(loggeduser);
  

  return (
    <BrowserRouter>
     <Routes>
       <Route path='/' element={<LoginPage setloggeduser = {setLoggeduser}/>} />
       <Route path='/registerPage' element={<RegistrationPage />} />
       <Route path='/dashboard' element={<Dashboard loggeduser={loggeduser}/>} />
       <Route path='/product/:ID' element={<ProductDetails />}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App