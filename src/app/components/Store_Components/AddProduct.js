import React, { useState } from 'react'

function AddProduct (props) {
  const [info, setInfo] = useState({
    name: "",
    description: "",
    quantity: 0,
    price: 0
  })

  const [files, setFiles] = useState()

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

    let data = new FormData()

    console.log(data)
    
    for (const key in info) {
      if (info.hasOwnProperty(key)) {
        const element = info[key];
        data.append(key, element)
      }
    }

    const FILESLENGTH = files.length

    for (let i = 0; i < FILESLENGTH; i++) {
      data.append("file" + i, files.item(i))
    }

    for (const pair of data.entries()) {
      console.log(pair)
    }

    const body = JSON.stringify(info)

    fetch("/admin/product/add", {
      method: "POST",
      headers: {
        authorization: "bearer " + props.userInfo.token
      },
      body: data,
    })
    .then(response => {
      console.log(response)
      return response.json()
    })
    .then(res => {
      console.log(res)
    })
  }

  function handleFilesChange (e) {
    const FILES = e.target.files
    setFiles(FILES)
  }

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
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
            <td>Image: </td>
            <td>
              <input
                required
                multiple
                type="file"
                name="price"
                accept="image/*"
                onChange={handleFilesChange}
                onInput={handleFilesChange}
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