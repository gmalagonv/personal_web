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


// window.addEventListener("scroll", function() {
//     var body = document.body;
//     if (body.scrollTop > 0) {
//         body.classList.add("white-background"); // Apply new background style
//     } else {
//         body.classList.remove("white-background"); // Remove the new background style
//     }
// });