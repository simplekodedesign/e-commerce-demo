import React, { useState, useEffect } from 'react'
import Search_Bar from './Search_Bar'

function Nav_Bar (props) {
  

  useEffect(() => {
    
  }, [])

  return (
    <div className="nav_bar" >
      <h1>This is the { props.message } category</h1>
      <Search_Bar findProduct={props.findProduct} />
    </div>
  )
}

export default Nav_Bar