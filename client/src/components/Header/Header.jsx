import React, { useState } from 'react'
import "../Header/Header.css"
import logo from "/traitlogo.png"
import { Link } from 'react-router-dom'

function Header() {

    const[clicked, setClicked] = useState(false)

    function handleClick(){
        setClicked(!clicked)
    }


  return (
    <header className='header'>
        <img src={logo} className='logo-img' />
        <div className="menu">
  
          <nav className="burger-menu">
            <input className="menu-check" type="checkbox" name="menu-check" value="" id="menu-check"/>
            <label className="menu-open" for="menu-check">
              <span className="burger1"></span>
              <span className="burger2"></span>
              <span className="burger3"></span>
            </label>

            <ul className="menu-options">

              <li><Link to={'/quienes-somos'}><button onClick={handleClick}>¿Quienes somos?</button></Link></li>
              <li><a href="/quienes-somos">¿Quienes somos?</a></li>
              <li><a href="#">Servicios</a></li>
              <li><a href="#">Trabajos</a></li>
              <li><a href="#">Contacto</a></li>

            </ul>
          </nav>

        </div>
    </header>
  )
}

export default Header
