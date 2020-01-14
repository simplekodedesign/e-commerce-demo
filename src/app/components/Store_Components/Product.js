import React from 'react'

function Product (props) {
  console.log(props)
  return(
    <div className="product_screen">
      <div className="gallery">
        <h1>This is the gallery</h1>
      </div>
      <div className="product_info">
        <h1>This is the info</h1>
      </div>
    </div>
  )
}

export default Product