import React from 'react'
import { useNavigate } from 'react-router-dom'

function NotFound() {
    const navigateTo = useNavigate();

  return (
    <section>
      <span>404 not found</span>
      <button onClick={()=>{navigateTo("/")} }>volver a home</button>
    </section>
  )
}

export default NotFound