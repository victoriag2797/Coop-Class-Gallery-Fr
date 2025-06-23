let button1 = document.querySelector('[type="button1"]'); 

let gotonextFunction = () =>{
    if (button1) {
        button1.addEventListener('click', () =>
            window.location.href = "2022-2023.html")
    }
}; 

gotonextFunction(); 

let button2 = document.querySelector('[type="button2"]'); 

let gotonext2Function = () =>{
    if (button2) {
        button2.addEventListener('click', () =>
            window.location.href = "2023-2024.html")
    }
}; 

gotonext2Function(); 

let button3 = document.querySelector('[type="button3"]'); 

let gotonext3Function = () =>{
    if (button3) {
        button3.addEventListener('click', () =>
            window.location.href = "2024-2025.html")
    }
}; 

gotonext3Function(); 

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}