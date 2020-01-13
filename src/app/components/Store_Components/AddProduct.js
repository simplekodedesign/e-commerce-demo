import React, { useState, useEffect } from 'react'

function AddProduct (props) {
  const [info, setInfo] = useState({
    name: "",
    description: "",
    quantity: 0,
    price: 0
  })

  useEffect(() => {
    
  }, [])


  function handleInputChange (e) {
    let {name, value} = e.target
    if(name === "price" || name === "quantity"){
      value = parseInt(value)
      if(value === NaN) return
    } 
    setInfo(prev => {
      return ({
        ...prev,
        [name]: value
      })
    })
  }

  function handleSubmit (e) {
    e.preventDefault()

    // setInfo(prev => {
    //   return ({
    //     ...prev,
    //     price: parseInt(prev.price),
    //     quantity: parseInt(prev.quantity)
    //   })
    // })


    const body = JSON.stringify(info)

    console.log(body)

    fetch("/admin/product/add", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        authorization: "bearer " + props.token
      },
      body: body
    })
    .then(response => {
      console.log(response)
      return response.json()
    })
    .then(res => {
      console.log(res)
    })
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
                type="number"
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
                type="number"
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