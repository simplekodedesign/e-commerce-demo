import React, { useState } from 'react'

function StarProduct(){
  const [active, setActive] = useState(1)
  function carousel(who){
    let value = active;
    if(who === true){
      value = active >= data.length-1 ? 0 : active + 1
    }else{
      value = active <= 0 ? data.length-1 : active - 1
    }
    setActive(value)
  }
  
  return(
    <div class='carousel'>
      <span className="arrow" id="prev" onClick={()=>{carousel(true)}}></span>
      
      <span className="arrow" id="next" onClick={()=>{carousel(true)}}></span>
    </div>  
  )
}

export default StarProduct