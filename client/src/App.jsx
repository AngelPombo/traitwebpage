import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import QuienesSomos from './components/QuienesSomos/QuienesSomos'
import Servicios from './components/Servicios/Servicios'
import Contacto from './components/Contacto/Contacto'
import Trabajos from './components/Trabajos/Trabajos'
import NotFound from './components/NotFound/NotFound'
import AvisoLegal from './components/AvisoLegal/AvisoLegal'
import PoliticaDePrivacidad from './components/PoliticaDePrivacidad/PoliticaDePrivacidad'
import PoliticaDeCookies from './components/PoliticaDeCookies/PoliticaDeCookies'
import AdminLogin from './components/AdminLogin/AdminLogin'

function App() {

  return (
    <div className='app-div'>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/admin-login' element={<AdminLogin />} />
          <Route path='/quienes-somos' element={<QuienesSomos />} />
          <Route path='/servicios' element={<Servicios />} />
          <Route path='/trabajos' element={<Trabajos />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/aviso-legal' element={<AvisoLegal />} /> 
          <Route path='/politica-privacidad' element={<PoliticaDePrivacidad />} />
          <Route path='/politica-cookies' element={<PoliticaDeCookies />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
