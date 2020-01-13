import React, { useState, useEffect } from 'react'
import Product from './Product'

function Products_Board (props) {
  const [products, setProducts] = useState()

  useEffect(() => {
    console.log(props)

    setProducts(() => {
      const itemArray = props.products.map(item => {
        return (
          <Product 
            key={item.data._id}
            info={item}
          />
        )
      })
      return itemArray
    })
    
    // setProducts(() => {
    //   const productsLength = props.products.productsLength
    //   let [item, itemArray] = [, []]
    //   for (let i = 0; i < productsLength; i++) {
    //     item = <Product key={i} />
    //     itemArray.push(item)
    //   }

    //   return itemArray
    // })
  }, [props])

  return (
    <div className="products_board" >
      { products }
    </div>
  )
}

export default Products_Board