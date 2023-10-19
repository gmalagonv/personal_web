// document.addEventListener('DOMContentLoaded', function() {
//     // Your JavaScript code that relies on the DOM being fully loaded goes here
//     let titulo = document.querySelector('.main_title h1');
//     let textoTitulo = titulo.innerHTML;
//     console.log(textoTitulo);


//     // if(textoTitulo == "Welcome to my site!") {
//     //     titulo.innerHTML = "OTRO";
//     // }
// });


// let titulo = document.querySelector('.main_title h1');
// let textoTitulo = titulo.innerHTML;
// console.log(textoTitulo);


let menu_responsive = document.querySelector(".checkbtn");

menu_responsive.onclick = function () {

navList = document.querySelector(".navlist");

navList.classList.toggle("active");
menu_responsive.classList.toggle("active");


};


const imprimir  = (texto) => {
    console.log(texto);
}
imprimir("hola mundo");
// window.addEventListener("scroll", function() {
//     var body = document.body;
//     if (body.scrollTop > 0) {
//         body.classList.add("white-background"); // Apply new background style
//     } else {
//         body.classList.remove("white-background"); // Remove the new background style
//     }
// });


// Function to scroll to a target element at a certain speed
function scrollToTarget(target, speed) {
    const targetElement = document.querySelector(target);
    if (targetElement) {
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      const startTime = performance.now();
      const duration = Math.abs(distance) / speed;
  
      function step(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        window.scrollTo(0, startPosition + distance * progress);
  
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      }
  
      requestAnimationFrame(step);
    }
  }
  
  // Add an event listener to handle clicks on anchor links
  const navLinks = document.querySelectorAll('.nav-item a');
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = link.getAttribute('href');
      const speed = 3; // Adjust the speed as needed (pixels per millisecond)
      scrollToTarget(target, speed);
    });
  });
  