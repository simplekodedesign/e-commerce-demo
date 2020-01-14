import React, { useState, useEffect } from 'react'

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
          <li>Add Product</li>
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