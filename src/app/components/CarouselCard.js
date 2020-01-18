import React from 'react'

function CarouselCard(props){
  var side;
  if(props.isActive >= props.idproduct){
    side = 'left';
  }else{
    side = 'right';
  }

  return(
    <div who={props.idproduct} className={`${props.isActive === props.idproduct ? "Tactive" : "" } testimonial staticAnimatable`} my-animation={`bounce ${side}`} onChange={() =>{console.log(this)}}>
      {/* props.isActive === props.idproduct ? animate(this) : null; */}
      <div className="meetText">
        <h4>{props.data.title}</h4>
        <i>
          {props.data.text}
        </i>
        <h5>{props.data.name} | {props.data.company}</h5>
      </div>
      <img data-src={props.data.image} className='lazyload'/>
    </div>
 )
}

export default CarouselCard