function setZoom() {
  console.log('zooming ...')
  /*if (window.matchMedia('(min-width: 780px) and (max-width: 1280px)').matches) {
    document.body.style.zoom = "70%";
  } else {
    document.body.style.zoom = "100%";
  }*/
    htmlWidth = $('html').innerWidth();
    bodyWidth = 1000;
   
    if (htmlWidth < bodyWidth)
       scale = 1
    else {
       scale = htmlWidth / bodyWidth; 
    }

}

// Call the function to set the zoom on page load
setZoom();

// Handle the window resize event
window.addEventListener('resize', setZoom);