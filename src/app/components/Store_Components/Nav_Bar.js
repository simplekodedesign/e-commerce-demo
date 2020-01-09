import React, { useState, useEffect } from 'react'
import Search_Bar from './Search_Bar'

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
    </div>
  )
}

export default Nav_Bar