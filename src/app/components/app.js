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
  const [, setInfo] = useState({})
  const [token, setToken] = useState("")

  useEffect(() => {
    setInfo({
      greeting: "Hi There!"
    })
  }, [])


  return (
    <Router>
      <Header />
      <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Store">
            <Store
              setToken={setToken}
            />
          </Route>
          <Route path="/Product/Add">
            <AddProduct token={token} />
          </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App