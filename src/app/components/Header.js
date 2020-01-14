import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import Login from './Login'
import UserMenu from './UserMenu'

function Header (props) {
  const [menu, setMenu] = useState("")

  useEffect(() => {
    setMenu(<UserMenu isAdmin={props.userInfo.isAdmin} />)
  }, [props])

  return (
    <header>
      <Link className="headerLogo" to="/"><img src="./img/logos/Uranx.png" alt="logo" /></Link>
      <div className="navbar">
        <Link  to="/">Inicio</Link>
        <Link to="/store">Catalogo</Link>
        <Link to="/about-us">Nosotros</Link>
        <Link to="/Product/Add">Add Product</Link>
        <Login submitUser={props.loginUser} />
        {props.userInfo.auth && menu}
      </div>
    </header>
  )
}

export default Header