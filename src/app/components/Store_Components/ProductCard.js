import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

function Product (props) {
  // const [info, setInfo] = useState({})

  useEffect(() => {
    
  }, [])

  function handleLinkClick (e) {
    props.setProduct(props.info)
  }

  return (
    <Link
      to={{
        pathname: "/Product/",
        search: "?product_id=" + props.info.data._id
      }}
      onClick={handleLinkClick}
    >
      <div className="product">
        <img alt="Product Image" src="./img/Alternador1.png" />
        <div className="product_info">
          <h3>{ props.info.data.name }</h3>
          <p>{ props.info.data.description }</p>
          <div className="product_prices">
            <span>{ props.info.data.price }</span>
          </div>
        </div>
      </div>
    </Link>
  )
}


export default Product