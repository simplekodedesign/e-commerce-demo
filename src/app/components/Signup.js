import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

function Signup (props) {
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  })

  const [dir, setDir] = useState()

  function handleInputChange (e) {
    const {name, value} = e.target

    setUser(prev => {
      return ({
        ...prev,
        [name]: value
      })
    })
  }

  function handleSubmit (e) {
    e.preventDefault()
    if(user.password === user.confirmPassword) {
      props.addUser(user)
      setDir(<Redirect to="/" />)
    } else {
      alert("Hay un error en confirmación de contraseña!")
    }
  }

  return (
    <section className="signup">
      <h2 className="title bold">Registro</h2>
      <form onSubmit={handleSubmit} className="submitForm">
        <input
          type="text"
          value={user.email}
          name="email"
          placeholder="Email"
          onChange={handleInputChange}
        />

        <input
          type="password"
          value={user.password}
          name="password"
          placeholder="Password"
          onChange={handleInputChange}
        />

        <input
          type="password"
          value={user.confirmPassword}
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={handleInputChange}
        />

        <button>Signup</button>
        
      </form>
      { dir }
    </section>
  )
}

export default Signup