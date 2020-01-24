import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

function Login (props) {
  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  const [hide, setHide] = useState(true)

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
    props.submitUser(user)
    formHider()
  }

  function formHider () {
    setHide(prev => !prev)
  }

  return (
    <div className="loginButton">
      <span onClick={() => formHider()}>Login</span>
      {
        !hide &&
        <form onSubmit={handleSubmit} className="loginForm">
          <h3>Iniciar sesión</h3>
          <div className="loginIput">
            <img src="./img/usuario.svg" alt="user" />
            <input
              type="text"
              value={user.email}
              name="email"
              placeholder="Email"
              onChange={handleInputChange}
            />
          </div>

          <div className="loginIput">
          <img src="./img/contraseña.svg" alt="password" />
            <input
              type="password"
              value={user.password}
              name="password"
              placeholder="Password"
              onChange={handleInputChange}
            />
          </div>

          <span>¿Ha olvidado su contraseña?</span>

          <div className="loginButtons">
            <Link to="/signup">
              <span onClick={formHider}>Registro</span>
            </Link>
            <button>Entrar</button>
          </div>
          
        </form>
      }
    </div>
  )
}

export default Login