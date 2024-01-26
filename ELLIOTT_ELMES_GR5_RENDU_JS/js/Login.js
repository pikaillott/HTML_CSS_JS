//darkmode function

var A = document.querySelector(".button"); //recupere le bouton
A.addEventListener('click', darkMode); //precise que le boutton active le darkMode

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode"); //active le mode dark-mode sur "document(la page web)"
}

//Hervé function
function validerFormulaire(e) {
    e.preventDefault(); // Empêche la soumission du formulaire par défaut

    let body = document.body; // Sélectionne le body

    let nom = document.getElementById("nom");
    let email = document.getElementById("email");
    let motDePasse = document.getElementById("motDePasse");

    // Vérification du bouton radio
    let genreHomme = document.getElementById("homme");
    let genreFemme = document.getElementById("femme");
    let genreError = document.getElementById("genreError");

    if (!genreHomme.checked && !genreFemme.checked) {
        genreError.textContent = "Veuillez sélectionner un genre.";
        genreError.classList.add("error");
        body.classList.add("error"); // Ajoute la classe error au body en cas d'erreur
    } else {
        genreError.textContent = "";
        genreError.classList.remove("error");
        body.classList.remove("error"); // Retire la classe error du body s'il n'y a pas d'erreur
    }

    // Ajoutez ici d'autres validations au besoin

    // Validation du mot de passe avec le regex
    let motDePasseError = document.getElementById("motDePasseError");

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/;

    if (!regex.test(motDePasse.value)) {
        motDePasseError.textContent = "Le mot de passe ne respecte pas les critères requis.";
        motDePasseError.classList.add("error");
        motDePasse.classList.add("error-input");
        body.classList.add("error"); // Ajoute la classe error au body en cas d'erreur
    } else {
        motDePasseError.textContent = "";
        motDePasseError.classList.remove("error");
        motDePasse.classList.remove("error-input");
        body.classList.remove("error"); // Retire la classe error du body s'il n'y a pas d'erreur
    }

    // Ajoutez ici d'autres validations au besoin

    // Si toutes les validations sont réussies, vous pouvez également soumettre le formulaire ici si nécessaire
    // document.getElementById("monFormulaire").submit();
}
let bt=document.querySelector('#bt');
bt.addEventListener('click',validerFormulaire)