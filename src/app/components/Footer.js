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
          <a href="tel:+573006153654" id="number">+57 300 6153654</a>
        </div>
        <div className="contact">
          <a href="mailto:contact@eberthscapital.com" id="email">contact@uranx.com</a>
        </div>
      </address>
      <div class='logoFooter'>
        <img src="./img/logos/Uranx.png" alt="logo" />
        <div id="Rs">
            <div className="iconRS">
              <a href="https://www.instagram.com/Eberthsp_/" target="_blank"><img src="img/instagram.svg" alt="Instagram" /></a>
            </div>
            <div className="iconRS">
              <a href="https://api.whatsapp.com/send?phone=5491164909499&text=Gracias%20por%20tan%20maravillosa%20oportunidad.%20¿como%20puedo%20iniciarme?" target="_blank"><img src="img/whatsapp.svg" alt="Whatsapp"/></a>
            </div>
            <div className="iconRS">
              <a href="https://web.telegram.org/#/im?p=@Eberthsp" target="_blank"><img src="img/telegram.svg" alt="Whatsapp"/></a>
            </div>
          </div>
      </div>
    </footer>
  )
}

export default Footer