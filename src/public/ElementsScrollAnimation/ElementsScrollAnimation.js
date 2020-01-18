
var animable = document.getElementsByClassName("myAnimatable");

window.addEventListener("load", function () {
    var items = animable.length;
    window.addEventListener("scroll", animateScroll);
});

function animate (data) {
    if(data.type){
        data = this;
        
        let i = parseInt(data.style.getPropertyValue("animation-iteration-count"));
        if(isNaN(i))i = 1;

        i++;
        data.style.setProperty("animation-iteration-count", `${i}`);
        data.style.setProperty("animation-play-state", "running");
    } else {

        switch (data.getAttribute("my-animation")) {
            //Fade Simple Animations
    
            case "fade left":
                data.style.setProperty("--varESA1", "-100px");
                data.style.setProperty("--varESA2", "0px");
                data.style.setProperty("animation-name", "animations");
            break;
    
            case "fade right":
                data.style.setProperty("--varESA1", "100px");
                data.style.setProperty("--varESA2", "0px");
                data.style.setProperty("animation-name", "animations");
            break;
    
            case "fade top":
                data.style.setProperty("--varESA1", "0px");
                data.style.setProperty("--varESA2", "-100px");
                data.style.setProperty("animation-name", "animations");
            break;
    
            case "fade bottom":
                data.style.setProperty("--varESA1", "0px");
                data.style.setProperty("--varESA2", "100px");
                data.style.setProperty("animation-name", "animations");
            break;
    
            //Bounce Animations
    
            case "bounce left":
                data.style.setProperty("--varESA1", "-250px");
                data.style.setProperty("--varESA2", "0px");
                data.style.setProperty("animation-name", "animations");
            break;
    
            case "bounce right":
                data.style.setProperty("--varESA1", "250px");
                data.style.setProperty("--varESA2", "0px");
                data.style.setProperty("animation-name", "animations");
            break;
    
            case "bounce top":
                data.style.setProperty("--varESA1", "0px");
                data.style.setProperty("--varESA2", "-250px");
                data.style.setProperty("animation-name", "animations");
            break;
    
            case "bounce bottom":
                data.style.setProperty("--varESA1", "0px");
                data.style.setProperty("--varESA2", "250px");
                data.style.setProperty("animation-name", "animations");
            break;
    
            //Rotate Animations
    
            case "rotate x":
                data.style.setProperty("--varESA1", "rotateX(90deg)");
                data.style.setProperty("animation-name", "rotateAnimations");
            break;
    
            case "rotate y":
                data.style.setProperty("--varESA1", "rotateY(90deg)");
                data.style.setProperty("animation-name", "rotateAnimations");
            break;
    
            //ClipShake Animations
    
            case "clipShake center x":
                data.style.setProperty("clip-path", "inset(40% 40% 40% 40%)");
                data.style.setProperty("animation-name", "clipPathAnimationsX");
            break;
    
            case "clipShake center y":
                data.style.setProperty("clip-path", "inset(40% 40% 40% 40%)");
                data.style.setProperty("animation-name", "clipPathAnimationsY");
            break;
    
        }
    }
}

function animateScroll (e) {
    for(var i = 0; i < animable.length; i++) {
        if(animable[i].getBoundingClientRect().top < 600) {
            // animable[i].addEventListener("click", animate);
            // animable[i].addEventListener("animationend", stopAnimation);
            animate(animable[i]);
        }
    }
}

// function stopAnimation () {
//     this.style.setProperty("animation-play-state", "paused");
// }