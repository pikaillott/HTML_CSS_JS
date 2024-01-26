//darkmode function

var A = document.querySelector(".button"); //recupere le bouton
A.addEventListener('click', darkMode); //precise que le boutton active le darkMode

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode"); //active le mode dark-mode sur "document(la page web)"
}


//"message envoyé!" notif

//var B = document.querySelector('.button2') //recupere bouton "send"
//B.addEventListener('click', Message); //attente du click pour activé la fonction
//
//function Message() {
//    let query = document.querySelector('query');
//    var C = document.querySelector('msgsenterror');
//    var D = document.querySelector('msgsent');
//
//    if (query.querySelector("query").value == null) {
//        C.textContent = "Merci d'écrire votre message pour l'envoyé.";
//    
//    } else {
//        D.textContent = "Message envoyé !";
//    }
//}

let B = document.querySelector('.button2')

B.addEventListener('click', function () {
    let query = document.querySelector('#query');
    let C = document.querySelector('#msgsenterror');
    let D = document.querySelector('#msgsent');
    
    if (query.value === '') { //si la valeure de query est égal a nul, alors...
        C.innerHTML += `<p>Merci d'écrire votre message pour l'envoyé.</p>`;

    } else {
        C.innerHTML = ''; //si la valeure est autre que nul, alors...
        D.innerHTML += `<p>Message envoyé !</p>`;
    }
})
