import React, { useState, useEffect } from 'react'
import Search_Bar from './Search_Bar'
import AddProduct from './AddProduct'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

function Nav_Bar (props) {
  const [category, setCategory] = useState("")

  useEffect(() => {
    setCategory("Alternadores")
  }, [])

  
  function navCategory (data) {
    props.setCategory(data)
    setCategory(data)
  }

  return (
    <div className="nav_bar" >
      <h1>This is the { category } category</h1>
      <Search_Bar setCategory={navCategory} />
      { props.isAdmin && <Link to="/Product/Add">Add Product</Link>}
    </div>
  )
}

export default Nav_Bar