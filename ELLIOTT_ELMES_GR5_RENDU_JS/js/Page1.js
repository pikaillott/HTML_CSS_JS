

//slideshow function
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change every 5 seconds
} 

//darkmode function

var A = document.querySelector(".button"); //recupere le bouton
A.addEventListener('click', darkMode); //precise que le boutton active le darkMode

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode"); //active le mode dark-mode sur "document(la page web)"
}


//"message envoyé!" notif

var B = document.querySelector('.button2') //recupere bouton "send"
B.addEventListener('click', msgSent); //attente du click pour activé la fonction

function msgSent() {
    let query = document.querySelector('query');
    var A = document.querySelector('msgsenterror');
    var B = document.querySelector('msgsent');

    if (query.getElementsByClassName("field").value ==null) {
        A.textContent = "Merci d'écrire votre message pour l'envoyé.";
    
    } else {
        B.textContent = "Message envoyé !";
    }
}