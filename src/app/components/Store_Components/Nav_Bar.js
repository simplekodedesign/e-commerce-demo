import React from 'react'
import Search_Bar from './Search_Bar'

function Nav_Bar (props) {
  return (
    <div className="nav_bar" >
      <h1>This is the { props.message } category</h1>
      <Search_Bar filterProduct={props.filterProduct} />
    </div>
  )
}

export default Nav_Bar