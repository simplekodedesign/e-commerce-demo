
var statics = document.getElementsByClassName("staticAnimatable")
var arrows = document.getElementsByClassName("arrow")
var testimonials = document.getElementById("testimonials")

const staticsLength = statics.length

window.addEventListener("load", () => {
  for (const iterator of arrows) {
    iterator.addEventListener("click", moveCarousel)
  }

  for (const item of statics) {
    item.addEventListener("animationend", pauseAnimation)
  }
})

function moveCarousel (e) {
  const { id } = e.target
  if (id === "next") {
    appearTestimonial(true)
  } else {
    appearTestimonial(false)    
  }
}

function pauseAnimation () {
  this.style.setProperty("animation-play-state", "paused")
}

function appearTestimonial (value) {
  console.log("It's happening") 
  const prev = parseInt(testimonials.getAttribute("who"))
  let current, animation
  if(value) {
    current = prev + 1
    animation = "bounce left"
    if(current >= staticsLength) current = 0
  } else {
    current = prev - 1
    animation = "bounce right"
    if(current < 0) current = staticsLength - 1
  }

  for (let i = 0; i < staticsLength; i++) {
    if (parseInt(statics[i].getAttribute("who")) === current){
      whosNext = statics[i]
    }
  }
  
  whosNext.setAttribute("my-animation", animation)
  animate(whosNext)

  let i = parseInt(whosNext.style.getPropertyValue("animation-iteration-count"));
  if(isNaN(i))i = 0;

  i++;
  whosNext.style.setProperty("animation-iteration-count", `${i}`);
  whosNext.style.setProperty("animation-play-state", "running");

}