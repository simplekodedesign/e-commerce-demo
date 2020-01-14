import React, { useState } from 'react'

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
        !hide && <form onSubmit={handleSubmit} className="loginForm">
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

          <button>LOGIN!</button>
          
        </form>
      }
    </div>
  )
}

export default Login