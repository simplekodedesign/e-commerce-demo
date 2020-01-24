import React, { useState, useEffect } from 'react'

function Gallery (props) {
  const [images, setImages] = useState()
  const [selected, setSelected] = useState()

  useEffect(() => {
    if(props.images) {
      const imagesArray = props.images.map((item, index) => {
        const alt = "Imagen de producto " + index
        return (
          <img 
            src={item}
            key={index}
            onMouseEnter={handleHover}
            alt={alt}
          />
        )
      })
      setImages(imagesArray)
      setSelected(props.images[0])
    }
  }, [])

  function handleHover (e) {
    const { src } = e.target
    setSelected(src)
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