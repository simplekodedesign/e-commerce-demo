import React, { useState } from 'react'

function Search_Bar (props) {
  const [inputValue, setInputValue] = useState("")

  // useEffect (() => {

  // }, [])


  function search (e) {
    e.preventDefault()
    props.setCategory(inputValue)
  }

  function handleInputChange (e) {
    const value = e.target.value

    setInputValue(value)
  }


  return(
    <form className="search_bar">
      <input
        type="text"
        placeholder="Search"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={search}>GO!</button>
    </form>
  )
}

export default Search_Bar