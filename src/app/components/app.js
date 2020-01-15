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

function App () {
  const [userInfo, setUserInfo] = useState("")

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

  function logOut () {
    setUserInfo({})
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
          <Store userInfo={userInfo} />
        </Route>
        <Route path="/Product/Add">
          <AddProduct
            userInfo={userInfo}
          />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App