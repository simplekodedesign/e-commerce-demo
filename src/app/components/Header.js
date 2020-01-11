import React from 'react'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

function Header () {
  return (
    <header>
      <Link className="headerLogo" to="/"><img src="./img/logos/Uranx.png" alt="logo" /></Link>
      <div className="navbar">
        <Link  to="/">Inicio</Link>
        <Link to="/store">Catalogo</Link>
        <Link to="/about-us">Nosotros</Link>
        <Link to="/Product/Add">Add Product</Link>
      </div>
    </header>
  )
}

export default Header