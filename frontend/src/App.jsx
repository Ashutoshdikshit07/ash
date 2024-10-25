import './App.css'
import {Routes, BrowserRouter, Route} from 'react-router-dom'
import { Index } from './pages/Index'
import { Signin } from './pages/Signin'
import { Signup } from './pages/Signup'



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Index/>} />
          <Route path='/signin' element={<Signin/>} />
          <Route path='/signup' element={<Signup/>} />
        </Routes>
      </BrowserRouter>

          
    </>
  )
}

export default App
