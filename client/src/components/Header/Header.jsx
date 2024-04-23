import React, { useState } from 'react'
import "../Header/Header.css"
import logo from "/traitlogo.png"

function Header() {

    const[clicked, setClicked] = useState(false)

    function handleClick(){
        setClicked(!clicked)
    }


  return (
    <header className='header'>
        <img src={logo} className='logo-img' />
        <menu>
          <ul>
            <li>¿Quienes somos?</li>
            <li>Servicios</li>
            <li>Trabajos</li>
            <li>Contacto</li>
          </ul>
        </menu>
    </header>
  )
}

export default Header
