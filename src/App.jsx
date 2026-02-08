import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter, Route , Router , Routes} from 'react-router-dom'
import './App.css'
import Login from './pages/LoginPages/login'
import Home from './pages/HomePages/home'
import Register from './pages/RegisterPages/register'
import Account from './pages/account/account'

import AuthGuard from './pages/Authmiddleware/authmiddleware'
import About from './pages/AboutPages/about'
function App() {
  const [count, setCount] = useState(0)

  return (

    <>

      <BrowserRouter>
        <Routes>
             <Route path='/' element={<Home></Home>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/register' element={<Register></Register>}></Route>
            {/* <Route path='/account' element={<Account></Account>}></Route> */}
             <Route path='/about' element={<About></About>}></Route>
            <Route
  path="/account"
  element={
    <AuthGuard>

      <Account></Account>
    </AuthGuard>

  }
/>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
