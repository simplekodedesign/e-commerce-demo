import React, { useState, useEffect } from 'react'

function Gallery (props) {
  const [images, setImages] = useState()
  const [selected, setSelected] = useState()

  useEffect(() => {
    if(props.images[0]) {
      const url = props.images[0].url
      const alt = "Imagen de producto 0"
      focusImage(alt)
      setSelected(url)
    }
  }, [props])

  function handleHover (e) {
    const { src, alt } = e.target
    focusImage(alt)
    setSelected(src)
  }

  function focusImage (altFocus) {
    const imagesArray = props.images.map((item, index) => {

      const alt = "Imagen de producto " + index
      const className = altFocus === alt ? "focus" : "unfocus"
      return (
        <img 
          src={item.url}
          key={index}
          onMouseEnter={handleHover}
          alt={alt}
          className={className}
        />
      )
    })
    setImages(imagesArray) 
  }

  return (
    <div className="gallery">
      <div className="mainImage">
        <img src={selected} />
      </div>
      <div className="imagesColumn">
        {images}
      </div>
    </div>
  )
}

export default Gallery