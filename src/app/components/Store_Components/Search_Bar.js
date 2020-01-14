import React, { useState } from 'react'

function Search_Bar (props) {
  const [inputValue, setInputValue] = useState("")

  // useEffect (() => {

  // }, [])


  function search (e) {
    e.preventDefault()
    props.findProduct(inputValue)
  }

  function handleInputChange (e) {
    const value = e.target.value

    setInputValue(value)
  }


  return(
    <form className="search_bar" onSubmit={search}>
      <input
        type="text"
        placeholder="Search"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button>search</button>
    </form>
  )
}

export default Search_Bar