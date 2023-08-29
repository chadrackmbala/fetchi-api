// Récupération des pièces depuis le fichier JSON
const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();

// for (let i = 0; i < pieces.length; i++) {

//     // Récupération de l'élément du DOM qui accueillera les fiches
//     const sectionFiches = document.querySelector(".fiches");
//     // Création d’une balise dédiée à une pièce automobile
//     const pieceElement = document.createElement("article");
//     // On crée l’élément img.
//     const imageElement = document.createElement("img");
//     const nomElement = document.createElement("h2");
//     nomElement.innerText = pieces[i].nom;
//     const prixElement = document.createElement("p");
//     prixElement.innerText = `Prix: ${pieces[i].prix} € (${pieces[i].prix < 35 ? "€" : "€€€"})`;
//     const descriptionElement = document.createElement("p");
//     descriptionElement.innerText = pieces[i].description ?? "aucune description pour le moment";
//     const categorieElement = document.createElement("p");
//     categorieElement.innerText = pieces[i].categorie ?? "aucune catégorie disponible";
//     const stockElement = document.createElement("p");
//     stockElement.innerText = pieces[i].disponibilite ? "En stock" : "Stock epuisé !";
//     // On accède à l’indice i de la liste pieces pour configurer la source de l’image.
//     imageElement.src = pieces[i].image;
//     // Idem pour le nom, le prix et la catégorie...

//     // On rattache la balise article à la section Fiches
//     sectionFiches.appendChild(pieceElement);
//     // On rattache l’image à pieceElement (la balise article)
//     pieceElement.appendChild(imageElement);
//     pieceElement.appendChild(nomElement);
//     pieceElement.appendChild(prixElement);
//     pieceElement.appendChild(categorieElement);
//     pieceElement.appendChild(descriptionElement);
//     pieceElement.appendChild(stockElement);
//     // Idem pour le nom, le prix et la catégorie...
// }

// const boutonTrier = document.querySelector(".btn-trier");
// boutonTrier.addEventListener("click", function () {
//     const piecesOrdonnees = Array.from(pieces);
//     piecesOrdonnees.sort(function (a, b) {
//         return a.prix - b.prix;
//     });
//     console.log(piecesOrdonnees);
// });

// const boutonFilter = document.querySelector(".btn-filtrer");
// boutonFilter.addEventListener("click", function () {
//     const piecesFiltrees = pieces.filter(function (pieces) {
//         return pieces.prix <= 35;
//     })
//     console.log(piecesFiltrees);
// });


// /* La fonction sort permet de comparer des éléments dans 
// une liste envue d'établir une liste */
// const boutonDecroissant = document.querySelector(".btn-decroissant");
// boutonDecroissant.addEventListener("click", function () {
//     const piecesOrdonnees = Array.from(pieces);
//     piecesOrdonnees.sort(function (a, b) {
//         return b.prix - a.prix;
//     });
//     console.log(piecesOrdonnees);
// });

// const boutonNonDescription = document.querySelector(".btn-nodesc");
// boutonNonDescription.addEventListener("click", function () {
//     const piecesFiltrees = pieces.filter(function (pieces) {
//         return pieces.description;
//     })
//     console.log(piecesFiltrees);
// });

// const newArray = pieces.map(function (piece) {
//     return piece.prix;
// });
// console.log(newArray);

// const noms = pieces.map(piece => piece.nom);
// console.log(noms);

// for(let i = pieces.length -1 ; i >= 0; i--){
//    if(pieces[i].prix > 35){
//        noms.splice(i,1)
//    }
// }
// console.log(noms);

// const abordablesElements = document.createElement("ul");

// for(i = 0; i <= pieces.length; i++) {
//     if(pieces[i].prix < 35) {
//         const nomElement = document.createElement("li");
//         nomElement.innerText = pieces[i].nom;
//     }
//     body.appendChild(abordablesElements);
//     abordablesElements.appendChild(nomElement);
// }

const boutonAbordable = document.querySelector(".btn-filtrer");
const fiches = document.querySelector(".fiches");
const abordablesElements = document.createElement("ul");
boutonAbordable.addEventListener("click", function () {
    for (let i = pieces.length - 1; i >= 0; i--) {
        if (pieces[i].prix < 35) {
            const imageElement = document.createElement("img");
            imageElement.src = pieces[i].image;
            const nomElement = document.createElement("li");
            nomElement.innerText = pieces[i].nom;
            abordablesElements.appendChild(imageElement);
            abordablesElements.appendChild(nomElement);
        }

    }
    fiches.appendChild(abordablesElements);
});

// document.body.innerHTML = '<article>'
//     + '<img src="' + piece.image + '" />'
//     + '<h2>' + piece.nom + '</h2>'
//     // ...
//     + '</article>'


    // boutonAbordable.addEventListener("click", function (){
    //     document.querySelector(".fiches").innerHTML = '';
    // })
    // Efface le contenu de la balise body et donc l’écran
