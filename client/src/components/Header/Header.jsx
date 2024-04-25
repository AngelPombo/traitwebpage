import React, { useState } from 'react'
import "../Header/Header.css"
import logo from "/traitlogoblanco.png"
import { Link } from 'react-router-dom'

function Header() {

    const[clicked, setClicked] = useState(false)

    function handleClick(){
        setClicked(!clicked)
    }


  return (
    <header className='header'>
        <img src={logo} className='logo-img' />
        <button onClick={handleClick} id="js_menu_button" className={`menu_button ${ clicked ? "on_menu" : ""}`}>
                <span className="menu_button_line top"></span>
                <span className="menu_button_line mid"></span>
                <span className="menu_button_line botm"></span>
            </button>
            <menu className="menu-header">
                <ul className={clicked ? "ul-header on" : "ul-header off"} id='menu'>
                    <li className={clicked ? "header-li" : ""}><Link to={'/quienes-somos'} className="nav-link"><button onClick={handleClick}>¿Quienes Somos?</button></Link></li>
                    <li className={clicked ? "header-li" : ""}><Link to={'/servicios'} className="nav-link"><button onClick={handleClick}>Servicios</button></Link></li>
                    <li className={clicked ? "header-li" : ""}><Link to={'/trabajos'} className="nav-link"><button onClick={handleClick}>Trabajos</button></Link></li>
                    <li className={clicked ? "header-li" : ""}><Link to={'/contacto'} className="nav-link"><button onClick={handleClick}>Contacto</button></Link></li>
                </ul>
            </menu>
    </header>
  )
}

export default Header
