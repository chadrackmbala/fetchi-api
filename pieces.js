import { ajoutListenersAvis } from "./avis.js";

// Récupération des pièces depuis le fichier JSON
const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();

// const pieces = await fetch("pieces-autos.json").then(pieces => pieces.json());

function genererPieces(pieces) {
    for (let i = 0; i < pieces.length; i++) {

        const article = pieces[i];
        // Récupération de l'élément du DOM qui accueillera les fiches
        const sectionFiches = document.querySelector(".fiches");
        // Création d’une balise dédiée à une pièce automobile
        const pieceElement = document.createElement("article");
        // Création des balises 
        const imageElement = document.createElement("img");
        imageElement.src = article.image;
        const nomElement = document.createElement("h2");
        nomElement.innerText = article.nom;
        const prixElement = document.createElement("p");
        prixElement.innerText = `Prix: ${article.prix} € (${article.prix < 35 ? "€" : "€€€"})`;
        const categorieElement = document.createElement("p");
        categorieElement.innerText = article.categorie ?? "(aucune catégorie)";
        const descriptionElement = document.createElement("p");
        descriptionElement.innerText = article.description ?? "Pas de description pour le moment.";
        const stockElement = document.createElement("p");
        stockElement.innerText = article.disponibilite ? "En stock" : "Rupture de stock";
        //Code ajouté
        const avisBouton = document.createElement("button");
        avisBouton.dataset.id = article.id;
        avisBouton.textContent = "Afficher les avis";

        // On rattache la balise article a la section Fiches
        sectionFiches.appendChild(pieceElement);
        pieceElement.appendChild(imageElement);
        pieceElement.appendChild(nomElement);
        pieceElement.appendChild(prixElement);
        pieceElement.appendChild(categorieElement);
        pieceElement.appendChild(descriptionElement);
        pieceElement.appendChild(stockElement);
        //Code aJouté
        pieceElement.appendChild(avisBouton);

    }
    ajoutListenersAvis();

}

genererPieces(pieces);

const boutonTrierCroissant = document.querySelector(".btn-croissant");
boutonTrierCroissant.addEventListener("click", function () {
    const ordonedArray = Array.from(pieces);
    ordonedArray.sort(function (a, b) {
        return a.prix - b.prix;
    })
    document.querySelector(".fiches").innerHTML = "";
    genererPieces(ordonedArray);
})

const boutonTrierDecroissant = document.querySelector(".btn-decroissant");
boutonTrierDecroissant.addEventListener("click", function () {
    const ordonedArray = Array.from(pieces);
    ordonedArray.sort(function (a, b) {
        return b.prix - a.prix;
    })
    document.querySelector(".fiches").innerHTML = "";
    genererPieces(ordonedArray);
})

const boutonDescription = document.querySelector(".btn-desc");
boutonDescription.addEventListener("click", function () {
    const filtedArray = pieces.filter(function (pieces) {
        return pieces.description;
    })
    document.querySelector(".fiches").innerHTML = "";
    genererPieces(filtedArray);
})

const boutonNonDescription = document.querySelector(".btn-nodesc");
boutonNonDescription.addEventListener("click", function () {
    const filtedArray = pieces.filter(function (pieces) {
        return !pieces.description;
    })
    document.querySelector(".fiches").innerHTML = "";
    genererPieces(filtedArray);
})

const boutonAbordable = document.querySelector(".btn-filtrer-abordable");
boutonAbordable.addEventListener("click", function () {
    document.querySelector(".fiches").innerHTML = "";
    for (let i = pieces.length - 1; i >= 0; i--) {
        if (pieces[i].prix < 35) {
            const fiches = document.querySelector(".fiches");
            const img = document.createElement("img");
            img.src = pieces[i].image;
            const nom = document.createElement("h2");
            nom.innerText = pieces[i].nom;
            const prix = document.createElement("p");
            prix.innerText = pieces[i].prix;
            fiches.appendChild(img);
            fiches.appendChild(nom)
            fiches.appendChild(prix);
            document.body.appendChild(fiches);
        }
    }
})

const boutonANonbordable = document.querySelector(".btn-filtrer-non-abordable");
boutonANonbordable.addEventListener("click", function () {
    document.querySelector(".fiches").innerHTML = "";
    for (let i = pieces.length - 1; i >= 0; i--) {
        if (pieces[i].prix > 35) {
            const fiches = document.querySelector(".fiches");
            const img = document.createElement("img");
            img.src = pieces[i].image;
            const nom = document.createElement("h2");
            nom.innerText = pieces[i].nom;
            const prix = document.createElement("p");
            prix.innerText = pieces[i].prix;
            fiches.appendChild(img);
            fiches.appendChild(nom)
            fiches.appendChild(prix);
            document.body.appendChild(fiches);
        }
    }
})