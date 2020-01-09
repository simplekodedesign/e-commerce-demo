import React from 'react'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

function Header () {
  return (
    <header>
      <img src="./img/logos/Uranx.png" alt="logo" />
      <div>
        <Link  to="/">Home</Link>
        <Link to="/store">Store</Link>
        {/* <Link to="/about-us">About us</Link> */}
      </div>
    </header>
  )
}

export default Header