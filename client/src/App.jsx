import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import QuienesSomos from './components/QuienesSomos/QuienesSomos'
import Servicios from './components/Servicios/Servicios'
import Contacto from './components/Contacto/Contacto'
import Trabajos from './components/Trabajos/Trabajos'

function App() {

  return (
    <div className='app-div'>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/quienes-somos' element={<QuienesSomos />} />
          <Route path='/servicios' element={<Servicios />} />
          <Route path='/trabajos' element={<Trabajos />}/>
          <Route path='/contacto' element={<Contacto />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
