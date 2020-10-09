/* Quand l'utilisateur scroll à 20 px on montre le boutton en bas à droite de la page */
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

/* Quand l'utilisateur clique sur le bouton ça remonte en haut */
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

/* Cookies */
(function() {
    if (!localStorage.getItem('cookieconsent')) {
        var request = new XMLHttpRequest();
        request.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var data = JSON.parse(request.responseText);
                var eu_country_codes = ['AL', 'AD', 'AM', 'AT', 'BY', 'BE', 'BA', 'BG', 'CH', 'CY', 'CZ', 'DE', 'DK', 'EE', 'ES', 'FO', 'FI', 'FR', 'GB', 'GE', 'GI', 'GR', 'HU', 'HR', 'IE', 'IS', 'IT', 'LT', 'LU', 'LV', 'MC', 'MK', 'MT', 'NO', 'NL', 'PO', 'PT', 'RO', 'RU', 'SE', 'SI', 'SK', 'SM', 'TR', 'UA', 'VA'];
                if (eu_country_codes.indexOf(data.countryCode) != -1) {
                    document.body.innerHTML += '\
                    <div class="cookieconsent" style="position:fixed;padding:20px;left:0;bottom:0;background-color:#000;color:#FFF;text-align:center;width:100%;z-index:99999;">\
                        Ce site utilise des cookies. En continuant à utiliser ce site, vous acceptez leur utilisation. \
                        <a href="#" style="color:#CCCCCC;">J&apos;ai compris</a>\
                    </div>\
                    ';
                    document.querySelector('.cookieconsent a').onclick = function(e) {
                        e.preventDefault();
                        document.querySelector('.cookieconsent').style.display = 'none';
                        localStorage.setItem('cookieconsent', true);
                    };
                }
            }
        };
        request.open('GET', 'http://ip-api.com/json', true);
        request.send();
    }
})();

/* Redirection des boutons "en savoir plus" de l'acceuil */
function click1() {
    document.location.href = "produit.html#Article8";
}

function click2() {
    document.location.href = "produit.html#Article15";
}

function click3() {
    document.location.href = "produit.html#Article1";
}

/* Bouton */

function validity() {
    alert('Votre Message à bien était envoyée');
};

/* Tableaux multidimensionnels pour stocker l'ensemble des informations des produits */
let tabProduit = [
    [
        "T-shirt Blanc en Dentelles",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia minima exercitationem esse nesciunt quibusdam corporis ullam inventore eos? Recusandae, esse?",
        "45.95€",
        "assets/img/HautDentellesBlanc.png"
    ],
    [
        "T-shirt à Poid Noir",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia minima exercitationem esse nesciunt quibusdam corporis ullam inventore eos? Recusandae, esse?",
        "35.95€",
        "assets/img/HautAPoid.png"
    ],
    [
        "Bustier Noir",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia minima exercitationem esse nesciunt quibusdam corporis ullam inventore eos? Recusandae, esse?",
        "45.95€",
        "assets/img/HautBustierNoir.png"
    ],
    [
        "T-shirt Noir",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia minima exercitationem esse nesciunt quibusdam corporis ullam inventore eos? Recusandae, esse?",
        "45.95€",
        "assets/img/HautNoir.png"
    ],
    [
        "T-shirt Rouge",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia minima exercitationem esse nesciunt quibusdam corporis ullam inventore eos? Recusandae, esse?",
        "35.95€",
        "assets/img/HautRouge.png"
    ],
    [
        "T-shirt Saumon",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia minima exercitationem esse nesciunt quibusdam corporis ullam inventore eos? Recusandae, esse?",
        "45.95€",
        "assets/img/HautSaumon.png"
    ],
    [
        "Jogging Noir et blanc",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia minima exercitationem esse nesciunt quibusdam corporis ullam inventore eos? Recusandae, esse?",
        "77.25€",
        "assets/img/BasBicolore.png"
    ],
    [
        "Jogging Gris",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia minima exercitationem esse nesciunt quibusdam corporis ullam inventore eos? Recusandae, esse?",
        "87.25€",
        "assets/img/BasLeggingGris.png"
    ],
    [
        "Jupe Noir",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia minima exercitationem esse nesciunt quibusdam corporis ullam inventore eos? Recusandae, esse?",
        "39.25€",
        "assets/img/BasJupeNoir.png"
    ],
    [
        "Pantalon Camoufflage",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia minima exercitationem esse nesciunt quibusdam corporis ullam inventore eos? Recusandae, esse?",
        "77.25€",
        "assets/img/BasPantalonCamoufflage.png"
    ],
    [
        "Legging Noir",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia minima exercitationem esse nesciunt quibusdam corporis ullam inventore eos? Recusandae, esse?",
        "87.25€",
        "assets/img/BasLeggingNoir.png"
    ],
    [
        "Jupe à carreaux",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia minima exercitationem esse nesciunt quibusdam corporis ullam inventore eos? Recusandae, esse?",
        "39.25€",
        "assets/img/BasJupeCarreaux.png"
    ],
    [
        "Chaussures à Talons Noir",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia minima exercitationem esse nesciunt quibusdam corporis ullam inventore eos? Recusandae, esse?",
        "39.25€",
        "assets/img/ChaussureTalons.png"
    ],
    [
        "Pantoufle Grise",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia minima exercitationem esse nesciunt quibusdam corporis ullam inventore eos? Recusandae, esse?",
        "39.25€",
        "assets/img/ChaussurePantoufle.png"
    ],
    [
        "Cuissardes Noir",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia minima exercitationem esse nesciunt quibusdam corporis ullam inventore eos? Recusandae, esse?",
        "39.25€",
        "assets/img/ChaussureCuissardesNoir.png"
    ],
    [
        "Bottines Noir",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia minima exercitationem esse nesciunt quibusdam corporis ullam inventore eos? Recusandae, esse?",
        "39.25€",
        "assets/img/ChaussureBottinesNoir.png"
    ],
    [
        "Basket Blanche",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia minima exercitationem esse nesciunt quibusdam corporis ullam inventore eos? Recusandae, esse?",
        "39.25€",
        "assets/img/ChaussureBlancheBasket.png"
    ],
    [
        "Basket Blanche Basses",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia minima exercitationem esse nesciunt quibusdam corporis ullam inventore eos? Recusandae, esse?",
        "39.25€",
        "assets/img/ChaussureBasketBlanche.png"
    ],
    [
        "Masque de couleur",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia minima exercitationem esse nesciunt quibusdam corporis ullam inventore eos? Recusandae, esse?",
        "39.25€",
        "assets/img/AccessoireMasque.png"
    ],
    [
        "Bandeau de couleur",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia minima exercitationem esse nesciunt quibusdam corporis ullam inventore eos? Recusandae, esse?",
        "39.25€",
        "assets/img/AccessoireBandeau.png"
    ],
    [
        "Bonnet Noir",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia minima exercitationem esse nesciunt quibusdam corporis ullam inventore eos? Recusandae, esse?",
        "39.25€",
        "assets/img/AccessoireBonnet.png"
    ],
    [
        "Chaussette en tricot",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia minima exercitationem esse nesciunt quibusdam corporis ullam inventore eos? Recusandae, esse?",
        "39.25€",
        "assets/img/AccessoireChaussetteTricot.png"
    ],
    [
        "Echarpe",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia minima exercitationem esse nesciunt quibusdam corporis ullam inventore eos? Recusandae, esse?",
        "39.25€",
        "assets/img/AccessoireEcharpe.png"
    ],
    [
        "Elastiques",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia minima exercitationem esse nesciunt quibusdam corporis ullam inventore eos? Recusandae, esse?",
        "39.25€",
        "assets/img/AccessoireElastique.png"
    ]
]

/* Comparaison entre ce que l'utilisateur saisi dans la barre de recherche avec les produits dans les tableaux */
function getValue() {
    let input = document.getElementById("search").value.toLowerCase();
    let spanElt = document.getElementById("result");
    let isFound = false;

    for (let i = 0; i < tabProduit.length; i++) {
        if (tabProduit[i][0].toLowerCase().includes(input)) {
            console.log("Il y a bien l'article " + input);
            spanElt.innerHTML = " ";
            spanElt.innerHTML = "Il y a bien l'article " + '"' + input + '"';
            isFound = true;
            break;
        }
    }

    if (!isFound) {
        console.log('"' + input + '"' + " ne correcpond à aucun article");
        spanElt.innerHTML = " ";
        spanElt.innerHTML = '"' + input + '"' + " ne correcpond à aucun article";
    }

}

/* Page pour afficher les produits */
/* Tableau des hauts */
let tabHaut = [
    [
        "T-shirt Blanc en Dentelles",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia minima exercitationem esse nesciunt quibusdam corporis ullam inventore eos? Recusandae, esse?",
        "45.95€",
        "assets/img/HautDentellesBlanc.png"
    ],
    [
        "T-shirt à Poid Noir",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia minima exercitationem esse nesciunt quibusdam corporis ullam inventore eos? Recusandae, esse?",
        "35.95€",
        "assets/img/HautAPoid.png"
    ],
    [
        "Bustier Noir",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia minima exercitationem esse nesciunt quibusdam corporis ullam inventore eos? Recusandae, esse?",
        "45.95€",
        "assets/img/HautBustierNoir.png"
    ],
    [
        "T-shirt Noir",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia minima exercitationem esse nesciunt quibusdam corporis ullam inventore eos? Recusandae, esse?",
        "45.95€",
        "assets/img/HautNoir.png"
    ],
    [
        "T-shirt Rouge",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia minima exercitationem esse nesciunt quibusdam corporis ullam inventore eos? Recusandae, esse?",
        "35.95€",
        "assets/img/HautRouge.png"
    ],
    [
        "T-shirt Saumon",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia minima exercitationem esse nesciunt quibusdam corporis ullam inventore eos? Recusandae, esse?",
        "45.95€",
        "assets/img/HautSaumon.png"
    ]
]

/* Tableau des bas */
let tabBas = [
    [
        "Jogging Noir et blanc",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia minima exercitationem esse nesciunt quibusdam corporis ullam inventore eos? Recusandae, esse?",
        "77.25€",
        "assets/img/BasBicolore.png"
    ],
    [
        "Jogging Gris",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia minima exercitationem esse nesciunt quibusdam corporis ullam inventore eos? Recusandae, esse?",
        "87.25€",
        "assets/img/BasLeggingGris.png"
    ],
    [
        "Jupe Noir",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia minima exercitationem esse nesciunt quibusdam corporis ullam inventore eos? Recusandae, esse?",
        "39.25€",
        "assets/img/BasJupeNoir.png"
    ],
    [
        "Pantalon Camoufflage",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia minima exercitationem esse nesciunt quibusdam corporis ullam inventore eos? Recusandae, esse?",
        "77.25€",
        "assets/img/BasPantalonCamoufflage.png"
    ],
    [
        "Legging Noir",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia minima exercitationem esse nesciunt quibusdam corporis ullam inventore eos? Recusandae, esse?",
        "87.25€",
        "assets/img/BasLeggingNoir.png"
    ],
    [
        "Jupe à carreaux",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia minima exercitationem esse nesciunt quibusdam corporis ullam inventore eos? Recusandae, esse?",
        "39.25€",
        "assets/img/BasJupeCarreaux.png"
    ]
]

/* Tableau des chaussures */
let tabChaussures = [
    [
        "Chaussures à Talons Noir",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia minima exercitationem esse nesciunt quibusdam corporis ullam inventore eos? Recusandae, esse?",
        "39.25€",
        "assets/img/ChaussureTalons.png"
    ],
    [
        "Pantoufle Grise",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia minima exercitationem esse nesciunt quibusdam corporis ullam inventore eos? Recusandae, esse?",
        "39.25€",
        "assets/img/ChaussurePantoufle.png"
    ],
    [
        "Cuissardes Noir",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia minima exercitationem esse nesciunt quibusdam corporis ullam inventore eos? Recusandae, esse?",
        "39.25€",
        "assets/img/ChaussureCuissardesNoir.png"
    ],
    [
        "Bottines Noir",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia minima exercitationem esse nesciunt quibusdam corporis ullam inventore eos? Recusandae, esse?",
        "39.25€",
        "assets/img/ChaussureBottinesNoir.png"
    ],
    [
        "Basket Blanche",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia minima exercitationem esse nesciunt quibusdam corporis ullam inventore eos? Recusandae, esse?",
        "39.25€",
        "assets/img/ChaussureBlancheBasket.png"
    ],
    [
        "Basket Blanche Basses",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia minima exercitationem esse nesciunt quibusdam corporis ullam inventore eos? Recusandae, esse?",
        "39.25€",
        "assets/img/ChaussureBasketBlanche.png"
    ]
]

/* Tableau des accessoires */
let tabAccessoires = [
    [
        "Masque de couleur",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia minima exercitationem esse nesciunt quibusdam corporis ullam inventore eos? Recusandae, esse?",
        "39.25€",
        "assets/img/AccessoireMasque.png"
    ],
    [
        "Bandeau de couleur",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia minima exercitationem esse nesciunt quibusdam corporis ullam inventore eos? Recusandae, esse?",
        "39.25€",
        "assets/img/AccessoireBandeau.png"
    ],
    [
        "Bonnet Noir",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia minima exercitationem esse nesciunt quibusdam corporis ullam inventore eos? Recusandae, esse?",
        "39.25€",
        "assets/img/AccessoireBonnet.png"
    ],
    [
        "Chaussette en tricot",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia minima exercitationem esse nesciunt quibusdam corporis ullam inventore eos? Recusandae, esse?",
        "39.25€",
        "assets/img/AccessoireChaussetteTricot.png"
    ],
    [
        "Echarpe",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia minima exercitationem esse nesciunt quibusdam corporis ullam inventore eos? Recusandae, esse?",
        "39.25€",
        "assets/img/AccessoireEcharpe.png"
    ],
    [
        "Elastiques",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia minima exercitationem esse nesciunt quibusdam corporis ullam inventore eos? Recusandae, esse?",
        "39.25€",
        "assets/img/AccessoireElastique.png"
    ]
]

/* Création et affichage des cards de la page produits */
let RowHaut1 = document.getElementById("RowHaut1"); // Tableau des hauts

// Afficher les valeurs du tabaleu de 1 à 3
for (d = 0; d < 3; d++) {

    // Création d'un élément HTML
    let divCol = document.createElement("div");

    // Associer l'élément HTML à un autre élément HTML
    RowHaut1.append(divCol);

    // Création de class
    divCol.classList.add("col-12", "col-sm-12", "col-md-12", "col-lg-4", "mt-2")

    let divCard = document.createElement("div");

    divCol.append(divCard);

    // Tableau

    divCard.classList.add("card", "article");

    divCard.id = "Article" + [d];

    let imgCard = document.createElement("img");

    divCard.append(imgCard);

    imgCard.classList.add("image", "shop-item-image");

    imgCard.alt = "Photo de Vêtement [Haut]";

    imgCard.title = "Photo de Vêtement [Haut]";

    // Contenu tableau

    imgCard.src = tabHaut[d][3];

    let bodyCard = document.createElement("div");

    divCard.append(bodyCard);

    bodyCard.classList.add("card-body");

    let titleCard = document.createElement("h4");

    bodyCard.append(titleCard);

    titleCard.classList.add("card-title", "shop-item-title")

    // Contenu tableau

    titleCard.innerHTML = tabHaut[d][0];

    let detailsCard = document.createElement("p");

    bodyCard.append(detailsCard);

    detailsCard.classList.add("card-text", "shop-item-details")

    // Contenu tableau

    detailsCard.innerHTML = tabHaut[d][1];

    let options = document.createElement("div");

    bodyCard.append(options);

    options.classList.add("options", "d-flex", "flex-fill");

    let priceCard = document.createElement("div");

    bodyCard.append(priceCard);

    priceCard.classList.add("buy", "d-flex", "justify-content-between", "align-items-center");

    let priceText = document.createElement("div");

    priceCard.append(priceText);

    priceText.classList.add("price", "text-info");

    let textPrice = document.createElement("h5");

    priceText.append(textPrice);

    textPrice.classList.add("mt-4", "shop-item-price");

    // Contenu tableau

    textPrice.innerHTML = tabHaut[d][2];

    let buttonPanier = document.createElement("button");

    divCard.append(buttonPanier);

    buttonPanier.classList.add("btn", "btn-primary", "shop-item-button");

    buttonPanier.type = "button";

    buttonPanier.innerHTML = "Ajouter au Panier";
}


let RowHaut2 = document.getElementById("RowHaut2");

// Afficher les valeurs du tabaleu de 3 à 6
for (i = 3; i < 6; i++) {

    let divCol = document.createElement("div");

    RowHaut2.append(divCol);

    divCol.classList.add("col-12", "col-sm-12", "col-md-12", "col-lg-4", "mt-2")

    let divCard = document.createElement("div");

    divCol.append(divCard);

    // Tableau

    divCard.classList.add("card", "article");

    divCard.id = "Article" + [i];

    let imgCard = document.createElement("img");

    divCard.append(imgCard);

    imgCard.classList.add("image", "shop-item-image");

    imgCard.alt = "Photo de Vêtement [Haut]";

    imgCard.title = "Photo de Vêtement [Haut]";

    // Contenu tableau

    imgCard.src = tabHaut[i][3];

    let bodyCard = document.createElement("div");

    divCard.append(bodyCard);

    bodyCard.classList.add("card-body");

    let titleCard = document.createElement("h4");

    bodyCard.append(titleCard);

    titleCard.classList.add("card-title", "shop-item-title")

    // Contenu tableau

    titleCard.innerHTML = tabHaut[i][0];

    let detailsCard = document.createElement("p");

    bodyCard.append(detailsCard);

    detailsCard.classList.add("card-text", "shop-item-details")

    // Contenu tableau

    detailsCard.innerHTML = tabHaut[i][1];

    let options = document.createElement("div");

    bodyCard.append(options);

    options.classList.add("options", "d-flex", "flex-fill");

    let priceCard = document.createElement("div");

    bodyCard.append(priceCard);

    priceCard.classList.add("buy", "d-flex", "justify-content-between", "align-items-center");

    let priceText = document.createElement("div");

    priceCard.append(priceText);

    priceText.classList.add("price", "text-info");

    let textPrice = document.createElement("h5");

    priceText.append(textPrice);

    textPrice.classList.add("mt-4", "shop-item-price");

    // Contenu tableau

    textPrice.innerHTML = tabHaut[i][2];

    let buttonPanier = document.createElement("button");

    divCard.append(buttonPanier);

    buttonPanier.classList.add("btn", "btn-primary", "shop-item-button");

    buttonPanier.type = "button";

    buttonPanier.innerHTML = "Ajouter au Panier";

}

let RowBas1 = document.getElementById("RowBas1"); // Tableau des bas

for (o = 0; o < 3; o++) {

    let divCol = document.createElement("div");

    RowBas1.append(divCol);

    divCol.classList.add("col-12", "col-sm-12", "col-md-12", "col-lg-4", "mt-2")

    let divCard = document.createElement("div");

    divCol.append(divCard);

    // Tableau

    divCard.classList.add("card", "article");

    // "+6" correspond à l'id suivant de l'article précédent sans reprendre à 0 
    divCard.id = "Article" + [o + 6];

    let imgCard = document.createElement("img");

    divCard.append(imgCard);

    imgCard.classList.add("image", "shop-item-image");

    imgCard.alt = "Photo de Vêtement [Bas]";

    imgCard.title = "Photo de Vêtement [Bas]";

    // Contenu tableau

    imgCard.src = tabBas[o][3];

    let bodyCard = document.createElement("div");

    divCard.append(bodyCard);

    bodyCard.classList.add("card-body");

    let titleCard = document.createElement("h4");

    bodyCard.append(titleCard);

    titleCard.classList.add("card-title", "shop-item-title")

    // Contenu tableau

    titleCard.innerHTML = tabBas[o][0];

    let detailsCard = document.createElement("p");

    bodyCard.append(detailsCard);

    detailsCard.classList.add("card-text", "shop-item-details")

    // Contenu tableau

    detailsCard.innerHTML = tabBas[o][1];

    let options = document.createElement("div");

    bodyCard.append(options);

    options.classList.add("options", "d-flex", "flex-fill");

    let priceCard = document.createElement("div");

    bodyCard.append(priceCard);

    priceCard.classList.add("buy", "d-flex", "justify-content-between", "align-items-center");

    let priceText = document.createElement("div");

    priceCard.append(priceText);

    priceText.classList.add("price", "text-info");

    let textPrice = document.createElement("h5");

    priceText.append(textPrice);

    textPrice.classList.add("mt-4", "shop-item-price");

    // Contenu tableau

    textPrice.innerHTML = tabBas[o][2];

    let buttonPanier = document.createElement("button");

    divCard.append(buttonPanier);

    buttonPanier.classList.add("btn", "btn-primary", "shop-item-button");

    buttonPanier.type = "button";

    buttonPanier.innerHTML = "Ajouter au Panier";
}


let RowBas2 = document.getElementById("RowBas2");

for (b = 3; b < 6; b++) {

    let divCol = document.createElement("div");

    RowBas2.append(divCol);

    divCol.classList.add("col-12", "col-sm-12", "col-md-12", "col-lg-4", "mt-2")

    let divCard = document.createElement("div");

    divCol.append(divCard);

    // Tableau

    divCard.classList.add("card", "article");

    divCard.id = "Article" + [b + 6];

    let imgCard = document.createElement("img");

    divCard.append(imgCard);

    imgCard.classList.add("image", "shop-item-image");

    imgCard.alt = "Photo de Vêtement [Bas]";

    imgCard.title = "Photo de Vêtement [Bas]";

    // Contenu tableau

    imgCard.src = tabBas[b][3];

    let bodyCard = document.createElement("div");

    divCard.append(bodyCard);

    bodyCard.classList.add("card-body");

    let titleCard = document.createElement("h4");

    bodyCard.append(titleCard);

    titleCard.classList.add("card-title", "shop-item-title")

    // Contenu tableau

    titleCard.innerHTML = tabBas[b][0];

    let detailsCard = document.createElement("p");

    bodyCard.append(detailsCard);

    detailsCard.classList.add("card-text", "shop-item-details")

    // Contenu tableau

    detailsCard.innerHTML = tabBas[b][1];

    let options = document.createElement("div");

    bodyCard.append(options);

    options.classList.add("options", "d-flex", "flex-fill");

    let priceCard = document.createElement("div");

    bodyCard.append(priceCard);

    priceCard.classList.add("buy", "d-flex", "justify-content-between", "align-items-center");

    let priceText = document.createElement("div");

    priceCard.append(priceText);

    priceText.classList.add("price", "text-info");

    let textPrice = document.createElement("h5");

    priceText.append(textPrice);

    textPrice.classList.add("mt-4", "shop-item-price");

    // Contenu tableau

    textPrice.innerHTML = tabBas[b][2];

    let buttonPanier = document.createElement("button");

    divCard.append(buttonPanier);

    buttonPanier.classList.add("btn", "btn-primary", "shop-item-button");

    buttonPanier.type = "button";

    buttonPanier.innerHTML = "Ajouter au Panier";
}

let RowChaussures1 = document.getElementById("RowChaussures1"); // Tableau des chaussures

for (p = 0; p < 3; p++) {

    let divCol = document.createElement("div");

    RowChaussures1.append(divCol);

    divCol.classList.add("col-12", "col-sm-12", "col-md-12", "col-lg-4", "mt-2")

    let divCard = document.createElement("div");

    divCol.append(divCard);

    // Tableau

    divCard.classList.add("card", "article");

    divCard.id = "Article" + [p + 12];

    let imgCard = document.createElement("img");

    divCard.append(imgCard);

    imgCard.classList.add("image", "shop-item-image");

    imgCard.alt = "Photo de Vêtement [Chaussures]";

    imgCard.title = "Photo de Vêtement [Chaussures]";

    // Contenu tableau

    imgCard.src = tabChaussures[p][3];

    let bodyCard = document.createElement("div");

    divCard.append(bodyCard);

    bodyCard.classList.add("card-body");

    let titleCard = document.createElement("h4");

    bodyCard.append(titleCard);

    titleCard.classList.add("card-title", "shop-item-title")

    // Contenu tableau

    titleCard.innerHTML = tabChaussures[p][0];

    let detailsCard = document.createElement("p");

    bodyCard.append(detailsCard);

    detailsCard.classList.add("card-text", "shop-item-details")

    // Contenu tableau

    detailsCard.innerHTML = tabChaussures[p][1];

    let options = document.createElement("div");

    bodyCard.append(options);

    options.classList.add("options", "d-flex", "flex-fill");

    let priceCard = document.createElement("div");

    bodyCard.append(priceCard);

    priceCard.classList.add("buy", "d-flex", "justify-content-between", "align-items-center");

    let priceText = document.createElement("div");

    priceCard.append(priceText);

    priceText.classList.add("price", "text-info");

    let textPrice = document.createElement("h5");

    priceText.append(textPrice);

    textPrice.classList.add("mt-4", "shop-item-price");

    // Contenu tableau

    textPrice.innerHTML = tabChaussures[p][2];

    let buttonPanier = document.createElement("button");

    divCard.append(buttonPanier);

    buttonPanier.classList.add("btn", "btn-primary", "shop-item-button");

    buttonPanier.type = "button";

    buttonPanier.innerHTML = "Ajouter au Panier";
}


let RowChaussures2 = document.getElementById("RowChaussures2");

for (c = 3; c < 6; c++) {

    let divCol = document.createElement("div");

    RowChaussures2.append(divCol);

    divCol.classList.add("col-12", "col-sm-12", "col-md-12", "col-lg-4", "mt-2")

    let divCard = document.createElement("div");

    divCol.append(divCard);

    // Tableau

    divCard.classList.add("card", "article");

    divCard.id = "Article" + [c + 12];

    let imgCard = document.createElement("img");

    divCard.append(imgCard);

    imgCard.classList.add("image", "shop-item-image");

    imgCard.alt = "Photo de Vêtement [Chaussures]";

    imgCard.title = "Photo de Vêtement [Chaussures]";

    // Contenu tableau

    imgCard.src = tabChaussures[c][3];

    let bodyCard = document.createElement("div");

    divCard.append(bodyCard);

    bodyCard.classList.add("card-body");

    let titleCard = document.createElement("h4");

    bodyCard.append(titleCard);

    titleCard.classList.add("card-title", "shop-item-title")

    // Contenu tableau

    titleCard.innerHTML = tabChaussures[c][0];

    let detailsCard = document.createElement("p");

    bodyCard.append(detailsCard);

    detailsCard.classList.add("card-text", "shop-item-details")

    // Contenu tableau

    detailsCard.innerHTML = tabChaussures[c][1];

    let options = document.createElement("div");

    bodyCard.append(options);

    options.classList.add("options", "d-flex", "flex-fill");

    let priceCard = document.createElement("div");

    bodyCard.append(priceCard);

    priceCard.classList.add("buy", "d-flex", "justify-content-between", "align-items-center");

    let priceText = document.createElement("div");

    priceCard.append(priceText);

    priceText.classList.add("price", "text-info");

    let textPrice = document.createElement("h5");

    priceText.append(textPrice);

    textPrice.classList.add("mt-4", "shop-item-price");

    // Contenu tableau

    textPrice.innerHTML = tabChaussures[c][2];

    let buttonPanier = document.createElement("button");

    divCard.append(buttonPanier);

    buttonPanier.classList.add("btn", "btn-primary", "shop-item-button");

    buttonPanier.type = "button";

    buttonPanier.innerHTML = "Ajouter au Panier";

}

let RowAccessoires1 = document.getElementById("RowAccessoires1"); // Tableau des accessoires

for (k = 0; k < 3; k++) {

    let divCol = document.createElement("div");

    RowAccessoires1.append(divCol);

    divCol.classList.add("col-12", "col-sm-12", "col-md-12", "col-lg-4", "mt-2")

    let divCard = document.createElement("div");

    divCol.append(divCard);

    // Tableau

    divCard.classList.add("card", "article");

    divCard.id = "Article" + [k + 15];

    let imgCard = document.createElement("img");

    divCard.append(imgCard);

    imgCard.classList.add("image", "shop-item-image");

    imgCard.alt = "Photo de Vêtement [Accessoires]";

    imgCard.title = "Photo de Vêtement [Accessoires]";

    // Contenu tableau

    imgCard.src = tabAccessoires[k][3];

    let bodyCard = document.createElement("div");

    divCard.append(bodyCard);

    bodyCard.classList.add("card-body");

    let titleCard = document.createElement("h4");

    bodyCard.append(titleCard);

    titleCard.classList.add("card-title", "shop-item-title")

    // Contenu tableau

    titleCard.innerHTML = tabAccessoires[k][0];

    let detailsCard = document.createElement("p");

    bodyCard.append(detailsCard);

    detailsCard.classList.add("card-text", "shop-item-details")

    // Contenu tableau

    detailsCard.innerHTML = tabAccessoires[k][1];

    let options = document.createElement("div");

    bodyCard.append(options);

    options.classList.add("options", "d-flex", "flex-fill");

    let priceCard = document.createElement("div");

    bodyCard.append(priceCard);

    priceCard.classList.add("buy", "d-flex", "justify-content-between", "align-items-center");

    let priceText = document.createElement("div");

    priceCard.append(priceText);

    priceText.classList.add("price", "text-info");

    let textPrice = document.createElement("h5");

    priceText.append(textPrice);

    textPrice.classList.add("mt-4", "shop-item-price");

    // Contenu tableau

    textPrice.innerHTML = tabAccessoires[k][2];

    let buttonPanier = document.createElement("button");

    divCard.append(buttonPanier);

    buttonPanier.classList.add("btn", "btn-primary", "shop-item-button");

    buttonPanier.type = "button";

    buttonPanier.innerHTML = "Ajouter au Panier";

}


let RowAccessoires2 = document.getElementById("RowAccessoires2");

for (a = 3; a < 6; a++) {

    let divCol = document.createElement("div");

    RowAccessoires2.append(divCol);

    divCol.classList.add("col-12", "col-sm-12", "col-md-12", "col-lg-4", "mt-2")

    let divCard = document.createElement("div");

    divCol.append(divCard);

    // Tableau

    divCard.classList.add("card", "article");

    divCard.id = "Article" + [a + 18];

    let imgCard = document.createElement("img");

    divCard.append(imgCard);

    imgCard.classList.add("image", "shop-item-image");

    imgCard.alt = "Photo de Vêtement [Accessoires]";

    imgCard.title = "Photo de Vêtement [Accessoires]";

    // Contenu tableau

    imgCard.src = tabAccessoires[a][3];

    let bodyCard = document.createElement("div");

    divCard.append(bodyCard);

    bodyCard.classList.add("card-body");

    let titleCard = document.createElement("h4");

    bodyCard.append(titleCard);

    titleCard.classList.add("card-title", "shop-item-title")

    // Contenu tableau

    titleCard.innerHTML = tabAccessoires[a][0];

    let detailsCard = document.createElement("p");

    bodyCard.append(detailsCard);

    detailsCard.classList.add("card-text", "shop-item-details")

    // Contenu tableau

    detailsCard.innerHTML = tabAccessoires[a][1];

    let options = document.createElement("div");

    bodyCard.append(options);

    options.classList.add("options", "d-flex", "flex-fill");

    let priceCard = document.createElement("div");

    bodyCard.append(priceCard);

    priceCard.classList.add("buy", "d-flex", "justify-content-between", "align-items-center");

    let priceText = document.createElement("div");

    priceCard.append(priceText);

    priceText.classList.add("price", "text-info");

    let textPrice = document.createElement("h5");

    priceText.append(textPrice);

    textPrice.classList.add("mt-4", "shop-item-price");

    // Contenu tableau

    textPrice.innerHTML = tabAccessoires[a][2];

    let buttonPanier = document.createElement("button");

    divCard.append(buttonPanier);

    buttonPanier.classList.add("btn", "btn-primary", "shop-item-button");

    buttonPanier.type = "button";

    buttonPanier.innerHTML = "Ajouter au Panier";

}

/*  Récupération des id et des class */
let Haut = document.getElementById("Haut");
let Bas = document.getElementById("Bas");
let Chaussures = document.getElementById("Chaussures");
let Accessoires = document.getElementById("Accessoires");

let BlocHaut = document.querySelector(".Haut");
let BlocBas = document.querySelector(".Bas");
let BlocChaussures = document.querySelector(".Chaussures");
let BlocAccessoires = document.querySelector(".Accessoires");

/* Fonctions qui remplacent l'url */
function ReplaceHaut() {
    document.location.href = "produit.html#HautCase";
}

function ReplaceBas() {
    document.location.href = "produit.html#BasCase";
}

function ReplaceChaussures() {
    document.location.href = "produit.html#ChaussuresCase";
}

function ReplaceAccessoires() {
    document.location.href = "produit.html#AccessoiresCase";
}

if (document.location.href === "produit.html#HautCase" || document.location.href === "https://lenapancher.github.io/klia.github.io/produit.html#HautCase") {

    BlocHaut.style.display = "block";
    BlocBas.style.display = "none";
    BlocChaussures.style.display = "none";
    BlocAccessoires.style.display = "none";

} else if (document.location.href === "produit.html#BasCase" || document.location.href === "https://lenapancher.github.io/klia.github.io/produit.html#BasCase") {

    BlocBas.style.display = "block";
    BlocHaut.style.display = "none";
    BlocChaussures.style.display = "none";
    BlocAccessoires.style.display = "none";

} else if (document.location.href === "produit.html#ChaussuresCase" || document.location.href === "https://lenapancher.github.io/klia.github.io/produit.html#ChaussuresCase") {

    BlocChaussures.style.display = "block";
    BlocHaut.style.display = "none";
    BlocBas.style.display = "none";
    BlocAccessoires.style.display = "none";

} else if (document.location.href === "produit.html#AccessoiresCase" || document.location.href === "https://lenapancher.github.io/klia.github.io/produit.html#AccessoiresCase") {

    BlocAccessoires.style.display = "block";
    BlocHaut.style.display = "none";
    BlocBas.style.display = "none";
    BlocChaussures.style.display = "none";

} else {

    BlocHaut.style.display = "block";
    BlocBas.style.display = "block";
    BlocChaussures.style.display = "block";
    BlocAccessoires.style.display = "block";

}

Haut.addEventListener("click", function() {

    BlocHaut.style.display = "block";
    BlocBas.style.display = "none";
    BlocChaussures.style.display = "none";
    BlocAccessoires.style.display = "none";

});

Bas.addEventListener("click", function() {

    BlocBas.style.display = "block";
    BlocHaut.style.display = "none";
    BlocChaussures.style.display = "none";
    BlocAccessoires.style.display = "none";

});

Chaussures.addEventListener("click", function() {

    BlocChaussures.style.display = "block";
    BlocHaut.style.display = "none";
    BlocBas.style.display = "none";
    BlocAccessoires.style.display = "none";

});

Accessoires.addEventListener("click", function() {

    BlocAccessoires.style.display = "block";
    BlocHaut.style.display = "none";
    BlocBas.style.display = "none";
    BlocChaussures.style.display = "none";

});
