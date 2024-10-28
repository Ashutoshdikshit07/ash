import './App.css'
import {Routes, BrowserRouter, Route} from 'react-router-dom'
import { Index } from './pages/Index'
import { Signin } from './pages/Signin'
import { Signup } from './pages/Signup'
import { Dashboard } from './pages/Dashboard'



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Index/>} />
          <Route path='/signin' element={<Signin/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
        </Routes>
      </BrowserRouter>

          
    </>
  )
}

export default App
