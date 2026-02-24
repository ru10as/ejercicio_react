import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import {Route, Routes} from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {

  return (
    <>
    <div className='d-flex flex-column min-vh-100'>
      <Header></Header>
      <main className='flex-grow-1'>
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </main>
      <Footer></Footer>
    </div>
    </>

  )
}

export default App;
