import React from 'react'
import "../Footer/Footer.css"
import { Link } from 'react-router-dom'
import ytlogo from '/youtubelogo.png'
import iglogo from '/instagramlogo.png'
import fblogo from '/facebooklogo.png'

function Footer() {
  return (
    <footer className='footer-main'>
      <nav className='footer-nav'>
        <ul className='footer-ul-politica'>
          <li className='footer-ul-politica-li'><Link to={'/aviso-legal'}>Aviso Legal</Link></li>
          <li className='footer-ul-politica-li'><Link to={'/politica-privacidad'}>Política de Privacidad</Link></li>
          <li className='footer-ul-politica-li'><Link to={'/politica-cookies'}>Política de cookies</Link></li>
        </ul>
        <ul className='footer-ul-rrss'>
          <li><Link to={"https://www.facebook.com/traitproduccionesartisticas?locale=es_ES"}><img className='logo-rrss' src={fblogo} alt="facebook-logo"/></Link></li>
          <li><Link to={"https://www.instagram.com/traitproduccionesartisticas/"}><img className='logo-rrss' src={iglogo} alt="instagram-logo"/></Link></li>
          <li><img className='logo-rrss' src={ytlogo} alt="youtube-logo"/></li>
        </ul>
      </nav>
      {/* <div className='footer-div'>
        <p>© 2024 Trait. Todos los derechos reservados.</p>
      </div> */}
      
    </footer>
  )
}

export default Footer
