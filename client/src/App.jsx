import './App.css'
import {Routes, Route} from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Login from './components/Login/Login'
import { useState } from 'react'

function App() {
  const [cover, setCover] = useState(false)
  
  const handleCover = () => {
    setCover(!cover)
  }


  return (
    <div className='app-main-div'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home handleCover={handleCover}/>} />
        
      
      </Routes>
      <Footer />
      {cover && <>
                  <div className="cover" onClick={handleCover}></div>
                  <Login />          
                </>
      }
    
    </div>
  )
}

export default App
