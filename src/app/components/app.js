import React, { useState, useEffect } from 'react'
import Header from './Header'
import Home from './Home'
import Store from './Store'

function App () {
  const [, setInfo] = useState({})

  useEffect(() => {
    setInfo({
      greeting: "Hi There!"
    })
  }, [])


  return (
    <main>
      <Header />
      <Home />
      <Store />
    </main>
  )
}

export default App