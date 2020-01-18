import React from 'react'
import 'lazysizes';

function AboutUs(){
  return(
    <main>
      <section id='aboutUs'>
        <h1 className='title bold'>Sobre Nosotros</h1>
        <p className="myAnimatable" my-animation="fade top">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Culpa perferendis, reiciendis asperiores obcaecati et error illo dolore veritatis molestiae quas.
          Iusto velit vel harum maxime soluta expedita minus nemo? Exercitationem.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Culpa perferendis, reiciendis asperiores obcaecati et error illo dolore veritatis molestiae quas.
          Iusto velit vel harum maxime soluta expedita minus nemo? Exercitationem.
        </p>
      </section>

      <section id='Brands'>
        <h2 className='title bold'>Nuestras Marcas</h2>
        <img data-src='./img/logos/Uranx.png' className='Distribuidor lazyload myAnimatable' my-animation="bounce left" alt='Uranx-logo' />
        <img data-src='./img/logos/Atomic.png' className='Distribuidor lazyload myAnimatable' my-animation="bounce right" alt='Atomic-logo' />
        <h2 className='title bold'>Distribuidor exclusivo para Colombia</h2>
        <img data-src='./img/logos/powerus.png' className='Distribuidor lazyload myAnimatable' my-animation="bounce bottom" alt='Powerus' />
        <img data-src='./img/logos/digital-design.png' className='Distribuidor lazyload myAnimatable' my-animation="bounce bottom" alt='Digital Design' />
      </section>

      <section id='History'>
        <h2 className='title bold'>Nuestra Historia</h2>
        
        <img data-src='./img/logos/Atomic.png' className='lazyload myAnimatable' alt='Atomic-logo' my-animation="fade left"/>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima consequatur quod consequuntur rerum in dolores numquam eius perferendis tempora modi voluptatibus quae nostrum obcaecati cupiditate ullam, reprehenderit voluptate, repellendus nobis.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima consequatur quod consequuntur rerum in dolores numquam eius perferendis tempora modi voluptatibus quae nostrum obcaecati cupiditate ullam, reprehenderit voluptate, repellendus nobis.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima consequatur quod consequuntur rerum in dolores numquam eius perferendis tempora modi voluptatibus quae nostrum obcaecati cupiditate ullam, reprehenderit voluptate, repellendus nobis.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima consequatur quod consequuntur rerum in dolores numquam eius perferendis tempora modi voluptatibus quae nostrum obcaecati cupiditate ullam, reprehenderit voluptate, repellendus nobis.
        </p>
      </section>

      <section id='Location'>
        <h2 className='title bold'>Donde estamos</h2>
        
        <iframe data-src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.9826395290015!2d-72.50904478522119!3d7.896881994311041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6645bdbd096dc1%3A0xbd56a8587b96ee68!2sURANX%20CAR%20AUDIO!5e0!3m2!1ses!2sve!4v1579113118854!5m2!1ses!2sve" frameBorder="0" allowFullScreen="" className='lazyload myAnimatable' my-animation="clipShake center x">Av. 6a ##0-85, Cúcuta, Norte de Santander, Colombia</iframe>
      </section>
    </main>
  )
}

export default AboutUs