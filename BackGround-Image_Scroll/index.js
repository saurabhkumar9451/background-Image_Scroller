const bgImageEl=document.getElementById("bg-image")

window.addEventListener("scroll",()=>{
    updateImage()
});

function updateImage(){
   bgImageEl.style.opacity = 1 - window.scrollY / 900;

  //  console.log(window.pageYOffset,1 - window.pageXOffset / 900)

    bgImageEl.style.backgroundSize = 160 - window.scrollY / 12 + "%";
}