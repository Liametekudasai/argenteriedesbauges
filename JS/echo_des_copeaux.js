var acc = document.getElementsByClassName("accordion");
var i;
var images = document.getElementsByClassName('imgResize');

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
        Array.from(images).forEach(function(image) {
          image.style.height = 'auto';
          image.style.width = '50vw';
        });
    } 
  });
}


  