import React, { useState } from 'react'
import "../Contacto/Contacto.css"
import telefonologo from "/telefonologo.png"
import emaillogo from "/emaillogo.png"

function Contacto() {

  const[nombre, setNombre] = useState("");
  const[email, setEmail] = useState("");
  const[telefono, setTelefono] = useState("");
  const[mensaje, setMensaje] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault();

    console.log('Nombre:', nombre);
    console.log('Email:', email);
    console.log('Teléfono:', telefono);
    console.log('Mensaje:', mensaje);

    setNombre("");
    setEmail("");
    setTelefono("");
    setMensaje("");
  }

  return (
    <section className='section-contacto'>
      <h2>Contáctanos para hacer tu celebración especial</h2>
      <p>Puedes contactar con nosotros directamente en el teléfono o el mail que tienes a continuación, o si lo prefieres cubriendo este formulario:</p>
      <ul className='ul-logos'>
        <li><img  className="logo-tlf" src={telefonologo}></img>  666554433</li>
        <li><img className='logo-email' src={emaillogo}></img>  tuemail@ejemplo.com</li>
      </ul>
      <form className='contacto-form' onSubmit={handleSubmit}>
        <div className='form-div'>
          <label htmlFor='nombre'>Nombre:</label>
          <input type='text' id='nombre' value={nombre} onChange={(e) => setNombre(e.target.value)}/>
        </div>
        <div className='form-div'>
          <label htmlFor='email'>Email:</label>
          <input type='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className='form-div'>
          <label htmlFor='telefono'>Teléfono:</label>
          <input type='tel' id='telefono' value={telefono} onChange={(e) => setTelefono(e.target.value)}/>
        </div>
        <div className='form-div'>
          <label htmlFor='mensaje'>Mensaje:</label>
          <textarea id='mensaje' value={mensaje} onChange={(e) => setMensaje(e.target.value)}></textarea>
        </div>
        <div className='btn-div'>
          <button className="form-btn" type='submit'>Enviar</button>
        </div>
      </form>
    </section>
  )
}

export default Contacto
