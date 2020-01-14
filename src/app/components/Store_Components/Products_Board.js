import React, { useState, useEffect } from 'react'
import ProductCard from './ProductCard'

function Products_Board (props) {
  const [products, setProducts] = useState()

  useEffect(() => {
    setProducts(() => {
      const itemArray = props.products.map(item => {
        return (
          <ProductCard 
            key={item.data._id}
            info={item}
            setProduct={props.setProduct}
          />
        )
      })
      return itemArray
    })
  }, [props])

  return (
    <div className="products_board" >
      { products }
    </div>
  )
}

export default Products_Board