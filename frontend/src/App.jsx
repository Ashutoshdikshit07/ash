import './App.css'
import {Routes, BrowserRouter, Route} from 'react-router-dom'
import { Index } from './pages/Index'
import { Signin } from './pages/Signin'



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index/>} />
          <Route path='/signin' element={<Signin/>} />
        </Routes>
      </BrowserRouter>

          
    </>
  )
}

export default App
