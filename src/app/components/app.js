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

function App () {
  const [, setInfo] = useState({})

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
          <Route path="/Store" component={Store} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App