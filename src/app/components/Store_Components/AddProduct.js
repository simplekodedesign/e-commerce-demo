import React, { useState, useEffect } from 'react'

function AddProduct () {
  const [info, setInfo] = useState({
    name: "",
    description: "",
    quantity: "",
    price: ""
  })
  const [user,] = useState({
    email: "AdminDNL",
    password: "0990"
  })
  const [token, setToken] = useState("")

  useEffect(() => {
    const body = JSON.stringify(user)
    console.log(JSON.stringify(user))
    fetch("/login/", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: body
    })
    .then(response => {
      console.log(response)
      return response.json()
    })
    .then(res => {
      console.log(res)
      setToken(res.token)
    })
  }, [])


  function handleInputChange (e) {
    const {name, value} = e.target
    console.log(info)
    setInfo(prev => {
      return ({
        ...prev,
        [name]: value
      })
    })
  }

  function handleSubmit (e) {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>Name: </td>
            <td>
              <input 
                required
                type="text"
                name="name"
                value={info.name}
                onChange={handleInputChange}
              />
            </td>
          </tr>
          <tr>
            <td>Description: </td>
            <td>
              <input 
                required
                type="text"
                name="description"
                value={info.description}
                onChange={handleInputChange}
              />
            </td>
          </tr>
          <tr>
            <td>Quantity: </td>
            <td>
              <input 
                required
                type="text"
                name="quantity"
                value={info.quantity}
                onChange={handleInputChange}
              />
            </td>
          </tr>
          <tr>
            <td>Price: </td>
            <td>
              <input 
                required
                type="text"
                name="price"
                value={info.price}
                onChange={handleInputChange}
              />
            </td>
          </tr>
          <tr>
            <td><button>Submit</button></td>
          </tr>
        </tbody>
      </table>
    </form>
  )
}

export default AddProduct