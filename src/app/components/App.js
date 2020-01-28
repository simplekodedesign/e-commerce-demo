import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './Header'
import Home from './Home'
import Store from './Store'
import Footer from './Footer'
import AddProduct from './Store_Components/AddProduct'
import Product from './Store_Components/Product'
import AboutUs from './AboutUs'
import Signup from './Signup'

function App () {
  const [userInfo, setUserInfo] = useState("")
  const [product, setProduct] = useState({})

  useEffect(() => {

  }, [])

  function loginUser (data) {
    const body = JSON.stringify(data)
    fetch("/login/", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body
    })
    .then(response => response.json())
    .then(res => setUserInfo(res))
  }

  function newRegularUser (data) {
    const body = JSON.stringify(data)

    fetch("/login/signup", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body : body
    })
    .then(response => response.json())
    .then(res => {
      console.log(res)
    })
    .catch(err => console.log(err))
  }

  function logOut () {
    setUserInfo({})
    window.location="/"
  }

  return (
    <Router>
      <Header
        loginUser={loginUser}
        userInfo={userInfo}
        logOut={logOut}
      />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Store">
          <Store 
            userInfo={userInfo} 
            setProduct={setProduct}
          />
        </Route>
        <Route path="/Product/Add">
          <AddProduct
            userInfo={userInfo}
          />
        </Route>
        <Route path="/Product">
          <Product
            product={product}
          />
        </Route>
        <Route path="/about-us">
          <AboutUs />
        </Route>
        <Route path="/signup">
          <Signup addUser={newRegularUser} />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
