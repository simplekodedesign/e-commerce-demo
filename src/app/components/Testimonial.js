import React, { useState, useEffect} from 'react'

function Testimonial (props){

  console.log(props, props.isActive === props.idproduct ? true : false)

  return(
    <div className={`${props.isActive === props.idproduct ? "Tactive" : null} testimonial`}>
      <div className="meetText">
        <h4>{props.data.title}</h4>
        <i>
          {props.data.text}
        </i>
        <h5>{props.data.name} | {props.data.company}</h5>
      </div>
      <img src='/img/person.png'/>
    </div>
  )
}

export default Testimonial