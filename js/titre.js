// Rediriger vers acheter des titres
let div = document.querySelector('.title-content');
let click = document.querySelector('#title-content');
let title = document.querySelector('.shopping');
let navContent = document.querySelector('.nav-content');
let footer = document.querySelector('footer')
let sectionContent = document.querySelector('.titres')
let payement = document.querySelector('.content');
let shop = document.getElementById('paragraph');
let commandeTicket = document.querySelector('.commande');
let liste = document.getElementById('liste');
let divContent = document.getElementById('navBar');
let submit = document.querySelector('.submit');
let spanContent = document.querySelector('.span');
let condition = document.getElementById('condition');
let totalTicket = document.getElementById('strong');
let total1 = document.querySelector('.commandeTicket2');
let total2 = document.querySelector('.commandeTicket3')
let total3 = document.querySelector('.cardP')
let articleContent = document.querySelector('.content-article');

function titre() {
    payement.style.display = 'block';
    div.style.display = 'none';
    navContent.style.display = 'none';
    footer.style.display = 'none';
    sectionContent.style.display = 'none';
}
click.addEventListener('click', titre);

title.addEventListener('click', function () {
    payement.style.display = 'block';
    articleContent.style.display = 'none';
    div.style.display = 'none';
    navContent.style.display = 'none';
    footer.style.display = 'none';
    sectionContent.style.display = 'none';
})
// Rediriger vers utiliser
let ticket = document.getElementById('ticket');
let article = document.querySelector('.utiliser');

function acheter() {
    article.style.display = 'block';
}
ticket.addEventListener('click', acheter);

// Rediriger vers le payement

let totalPrix = 0;

function updateSubtotals() {
    totalTicket.textContent = totalPrix.toFixed(2) + "€";
    total1.textContent = totalPrix.toFixed(2) + "€";
   
    total3.textContent = "Montant :" + totalPrix.toFixed(2) + ' ' + "EUR";
}

let more = document.querySelectorAll('#plus');
let less = document.querySelectorAll('#moins');
console.log(less);

more.forEach(button => {
    button.addEventListener('click', function () {
        let articleContent = document.querySelector('.content-article');
        let quantityT = document.querySelector('.compteur');
        let price = document.querySelector('.paye');

        let prix = parseFloat(price.textContent);
        let quantity = parseInt(quantityT.textContent);

        quantity += 1;
        quantityT.textContent = quantity;
        total2.textContent = (quantity) + ' ' + "x" + ' ' + totalPrix.toFixed(2) + "€";

        articleContent.style.display = 'block';
        shop.textContent = "Acheter" + ' ' + "("  + (quantity) + ")";
        totalPrix += prix;

        updateSubtotals();

    })
});

less.forEach(button => {
    button.addEventListener('click', function () {
        let articleContent = document.querySelector('.content-article');
        let quantityT = document.querySelector('.compteur');
        let price = document.querySelector('.paye');

        let prix = parseFloat(price.textContent);
        let quantity = parseInt(quantityT.textContent);

        if (quantity > 0) {
            quantity -= 1;
            quantityT.textContent = quantity;
            shop.textContent = "Acheter" + ' ' + "(" + (quantity) + ")";

            totalPrix -= prix;
            if (totalPrix < 0) totalPrix = 0;

            updateSubtotals();

            if (totalPrix === 0) {
                articleContent.style.display = 'none';
            }
        }
    });
});

// button annuler

let closeBtn = document.getElementById('close');
console.log(closeBtn);

function closeButton() {
    payement.style.display = 'none';
    div.style.display = 'block';
    footer.style.display = 'block';
    navContent.style.display = 'block';

}
closeBtn.addEventListener('click', closeButton);

shop.addEventListener('click', function () {
    commandeTicket.style.display = 'block';
    articleContent.style.display = 'none';
    payement.style.display = 'none';
    navContent.style.display = 'none';
})

// Au click sur le button retour sa me redirige vers acheter des titres

let backButton = document.getElementById('back');
let backBtn = document.getElementById('back1');
let backTwo = document.getElementById('back2');
let backThree = document.getElementById('back3');

backButton.addEventListener('click', function () {
    payement.style.display = 'block';
    commandeTicket.style.display = 'none';
    articleContent.style.display = 'none';
})

backBtn.addEventListener('click', function () {
    commandeTicket.style.display = 'block';
    traduction.style.display = 'none';
    mainContent.style.display = 'none';

})
backTwo.addEventListener('click', function () {
    payement.style.display = 'block';
    validation.style.display = 'none';

})
backThree.addEventListener('click', function () {
    navContent.style.display = 'block';
    footer.style.display = 'block';
    sectionContent.style.display = 'block';
    controle.style.display = 'none';
    article.style.display = 'none';
    code.style.display = 'none';
})

// Rediriger vers le paiyement
console.log(submit)
submit.addEventListener('click', function () {
    traduction.style.display = 'block';
    mainContent.style.display = 'block';
    commandeTicket.style.display = 'none';

})

// button fermer 
let close = document.querySelector('.closeBtn');

close.addEventListener('click', function () {
    sectionContent.style.display = 'block';
    navContent.style.display = 'block';
    footer.style.display = 'block';
    validation.style.display = 'none';
    article.style.display = 'none';
})

let clickUtiliser = document.querySelector('.btn-content');
let controle = document.querySelector('.controle');
let croix = document.getElementById('croix');
let croix1 = document.querySelector('#croix1');

clickUtiliser.addEventListener('click', function () {
    controle.style.display = 'block';
    navContent.style.display = 'none'
    footer.style.display = 'none';
    sectionContent.style.display = 'none'
})

croix.addEventListener('click', function () {
    controle.style.display = 'block';
    metro.style.display = 'none';
    code.style.display = 'none';
})

croix1.addEventListener('click', function () {
    controle.style.display = 'block';
    code.style.display = 'none';
})
// Ridirection vers les details du metro et controle

let paragraph = document.querySelector('h5');
let metro = document.getElementById('correspondance');

paragraph.addEventListener('click', function () {
    metro.style.display = 'block';
    controle.style.display = 'none';
    code.style.display = 'none';

})

let code = document.querySelector('.code');
let codeQR = document.querySelector('.btnContent');

codeQR.addEventListener('click', function () {
    code.style.display = 'block';
    controle.style.display = 'none';

})
// button checkbox
let checkbox = document.getElementById('check');
let buttonContent = document.querySelector('.btn-content');

// Écoute le cochage de la case et change la couleur du bouton de paiement
condition.addEventListener('change', function () {
    if (this.checked) {
        submit.style.backgroundColor = '#d92e10';
    } else {
        submit.style.backgroundColor = '#ec9687';
    }
});

checkbox.addEventListener('change', function () {
    if (this.checked) {
        buttonContent.style.backgroundColor = '#d92e10';
    } else {
        buttonContent.style.backgroundColor = '#ec9687';
    }
});
// fin de validite en heure
function startTime() {
    let today = new Date();
    let date = today.getDate();
    let heure = today.getHours();
    let minute = today.getMinutes();
    let seconde = today.getSeconds();
    minute = checkTime(minute);
    document.getElementById('timeHours').innerHTML =
        heure + ":" + minute + ":" + seconde;
    const t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i > 10) { i = "0" - i };
    return i;
}

startTime();

