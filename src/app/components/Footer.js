import React from 'react'

function Footer () {
  return (
    <footer>
      <address className="contacCont" id="Contacto">
        <h3>Contacto:</h3>
        <div className="contact" >
          <a href="https://l.wl.co/l?u=https%3A%2F%2Fmaps.app.goo.gl%2FLdsxNQzrSEqBWLve8" id="location">Cúcuta, Colombia.</a>
        </div>
        <div className="contact" id="another">
          <a href="tel:+573006153654" id="number">+57 300 6153654</a><br/>
          <a href="tel:+573228543678">+57 322 8543678</a>
        </div>
        <div className="contact">
          <a href="mailto:jcgr10@hotmail.com" id="email">jcgr10@hotmail.com</a>
        </div>
      </address>
      <div className='logoFooter'>
        <img src="./img/logos/Uranx.png" alt="logo" />
        <div id="Rs">
            {/* <div className="iconRS">
              <a href="https://www.instagram.com/Eberthsp_/" target="_blank"><img src="img/instagram.svg" alt="Instagram" /></a>
            </div> */}
            <div className="iconRS">
              <a href="https://api.whatsapp.com/send?phone=573006153654&text=Hola%20me%20gustaría%20saber%20más.%20sobre%20UranX." target="_blank"><img src="img/whatsapp.svg" alt="Whatsapp"/></a>
            </div>
            <div className="iconRS">
              <a href="https://web.telegram.org/" target="_blank"><img src="img/telegram.svg" alt="Telegram"/></a>
            </div>
          </div>
      </div>
    </footer>
  )
}

export default Footer