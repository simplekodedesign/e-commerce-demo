import React, {useState} from 'react'
import Testimonial from './Testimonial'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

const data = [
  {
    title: "Gran atención",
    text: "Uranx is great, it solves all my problems Uranx is great, it solves all my problems Uranx is great, it solves all my problems",
    name: "Jhon Doe",
    company: "Simple Kode Design"
  },
  {
    title: "Not only for competitions",
    text: "this is amazing",
    name: "Jhon Doe",
    company: "Simple Kode Design"
  },
  {
    title: "Great alternators",
    text: "this is amazing",
    name: "Jhon Doe",
    company: "Name of the company"
  }
]

function Home () {
  const [active, setActive] = useState(0)

  function testimonialHandler(who){
    let value = active;
    if(who === true){
      value = active >= data.length-1 ? 0 : active + 1
    }else{
      value = active <= 0 ? data.length-1 : active - 1
    }
    setActive(value)
  }

  return (
    <div>
      <section id='hero'>
        <div>
          <h1>Lorem Ipsum</h1>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, accusamus atque itaque
           aspernatur deserunt tenetur nisi
           voluptate ex ut porro a iusto eveniet magnam! Soluta voluptate voluptas enim in cumque.
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, accusamus atque
            itaque aspernatur deserunt tenetur nisi voluptate 
           ex ut porro a iusto eveniet magnam! Soluta voluptate voluptas enim in cumque.
          </p>
        </div>
      </section>

      <section id='Queofrecemos'>
        <h2 className="title bold">Que ofrecemos</h2>
        <h2 className="title bold">Por trabajar</h2>
      </section>

      <section id="Whyus">
        <h2 className="title bold">¿Por qué nosotros?</h2>
        <div className='usCard'>
          <img src='/img/calidad.svg'/>
          <div className='usCardtext'>
            <h4>Lorem Ipsum</h4>
            <p>
              lorem ipsum dolor sit amet, consectetur sit amet sit amet
            </p>
          </div>
        </div>
        <div className='usCard'>
          <img src='/img/usCard.svg'/>
          <div className='usCardtext'>
            <h4>Lorem Ipsum</h4>
            <p>
              lorem ipsum dolor sit amet, consectetur
            </p>
          </div>
        </div>
        <div className='usCard'>
          <img src='/img/confiebles.svg'/>
          <div className='usCardtext'>
            <h4>Lorem Ipsum</h4>
            <p>
              lorem ipsum dolor sit amet, consectetur
            </p>
          </div>
        </div>
      </section>

      <section id="meetUs">
        <div className="aboutPhoto" id='aboutPhoto'>
          <img src='/img/people.png'/>
        </div>
        <div className="aboutPhoto" id='aboutLogo'>
          <img src='/img/logos/Atomic.png'/>
        </div>
        <div className="meetText">
          <h2 className="title bold">Conocenos</h2>
          <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta quibusdam et sapiente deleniti vero
           sint adipisci reprehenderit voluptatum,
          obcaecati ducimus delectus numquam maiores, eos ipsam accusantium ipsum blanditiis molestias corporis!
          </p>
          <Link to="/about-us" className='button'>Más información</Link>
        </div>
      </section>

      <section id="testimonials">
        <h2 className="title bold">Nuestros Clientes</h2>
        <span className="arrow" id="prev" onClick={()=>{testimonialHandler(false)}}></span>
        <Testimonial idproduct={0} isActive={active} data={data[0]} />
        <Testimonial idproduct={1} isActive={active} data={data[1]} />
        <Testimonial idproduct={2} isActive={active} data={data[2]} />
        <span className="arrow" id="next" onClick={()=>{testimonialHandler(true)}}></span>
      </section>
    </div>
  )
}

export default Home