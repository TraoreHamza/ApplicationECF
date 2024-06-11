let numberCard = document.getElementById('numberCard');
let experyDate = document.getElementById('experyDate');
let formContent = document.querySelector('#valide');
let validation = document.querySelector('.validation');
let form = document.querySelector('.formContent')
let traduction = document.querySelector('.payTraduction');
let mainContent = document.querySelector('main');
let crypto = document.getElementById('crypto');

form.addEventListener('submit', event => {
    event.preventDefault();

 

    let isValid = true;

    let monthCard = document.getElementById('select').value;
    if (monthCard === "") {
       experyDate.innerText = "Date d'expiration invalide";
        isValid = false;
    }

    let cryptogramme = document.getElementById('cvv').value;
    if (cryptogramme.length !== 3 || isNaN(cryptogramme)) {
        crypto.innerText = "Cryptogramme visuel vide ou invalide";
        isValid = false;
    }


    if (isValid) {
        traduction.style.display = 'none';
        mainContent.style.display = 'none';
        validation.style.display = 'block';
        localStorage.setItem('cardForm', 'card');
}  
});

//Annuler et retourner vers la boutique 
 let card = document.getElementById('card');
 card.addEventListener('click', function () {
     payement.style.display = 'block';
     traduction.style.display = 'none';
     mainContent.style.display = 'none';

 })

