import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

function UserMenu (props) {
  const [hide, setHide] = useState(true)
  const [menu, setMenu] = useState("")

  useEffect(() => {
    if (props.isAdmin) {
      setMenu(
        <ul className="userMenu">
          <li onClick={props.logOut}>Log Out</li>
          <li>Car</li>
          <li>Account settings</li>
          <hr />
          <li><Link to="/Product/Add">Add Product</Link></li>
          <li>Add Currency</li>
          <li>Add User Admin</li>
        </ul>
      )
    } else {
      setMenu(
        <ul className="userMenu">
          <li onClick={props.logOut}>Log Out</li>
          <li>Car</li>
          <li>Account settings</li>
        </ul>
      )
    }
  }, [props])

  function hideMenu () {
    setHide(prev => !prev)
  }

  return (
    <div className="menuIcon">
      <span onClick={hideMenu}>Menu</span>
      { !hide && menu }
    </div>
  )
}

export default UserMenu