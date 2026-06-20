import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Editorpage from './pages/Editorpage'
import { Route,Routes } from 'react-router'
import Features from './pages/Features'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/editorpage' element={<Editorpage/>}/>
        <Route path='/features' element={<Features/>}/>
      </Routes>
    </div>
  )
}

export default App