//Variable représentant le numéro de l'exercice en cour dans la page index.html
let exercice_description = document.querySelector("h3");
//Variable représentant notre paragraphe dans la page index.html
let result_container = document.querySelector("p");

/*
Exercice 1
@Mot de passe correct ou incorrect
*/
function login(){
    exercice_description.textContent = "Exercice 01 :: Mot de passe correct ou incorrect";
    if (prompt("Saisir votre mot de passe : ").trim() === "MasterClass2023") {
        result_container.textContent = "Bienvenue";
    }
    else {
        result_container.textContent = "Erreur de mot de passe";
    }
}

/*
Exercice 2.a
@Suite numérique paire
*/
function suiteNombrePairs(){
    result_container.textContent = "0";
    let x = 0;
    do {
        x = Math.abs(parseInt(prompt("Saisir le nombre X : ").trim()));
    } while (x === 0);
    for (let i = 2; i <= x; i += 2) {
        result_container.textContent += ", " + i;
    }
    exercice_description.textContent = "Exercice 02.b :: La suite de nombres pairs de 0 à " + x;
}

/*
Exercice 2.b
@Suite numérique impaire
*/
function suiteNombreImpairs(){
    result_container.textContent = "0";
    let x = 0;
    do {
        x = Math.abs(parseInt(prompt("Saisir le nombre X : ").trim()));
    } while (x === 0);
    for (let i = 1; i <= x; i++) {
        if (i % 2 !== 0) {
            result_container.textContent += ", " + i;
        }
    }
    exercice_description.textContent = "Exercice 02.b :: La suite de nombres impairs de 0 à " + x;
}

/*
Exercice 3
@Permutation de a et b
*/
function permutation(){
    let a, b, c;
    a = parseInt(prompt("Saisir a : ").trim());
    b = parseInt(prompt("Saisir b : ").trim());
    exercice_description.textContent = "Exercice 03 :: La permutation des valeurs (a = " + a + " et b = " + b + ")";
    c = a;
    a = b;
    b = c;
    result_container.textContent = "a = " + a + " et b = " + b;
}

/*
Exercice 4
@Année bissextile
*/
function anneeBissextile(){
    let annee = parseInt(prompt("Saisir l'année : ").trim());
    exercice_description.textContent = "Exercice 04 :: Vérification de l'année " + annee + 
    " si elle est bissextile";
    if (annee % 4 === 0 && annee % 100 !== 0) {
        result_container.textContent = "Oui c'est une année bissextile";
    }
    else{
        result_container.textContent = "Non ce n'est pas une année bissextile";
    }
}

/*
Exercice 5
@ Equation du second degré
*/
function equationSecondDegre(){
    let a, b, c, delta, x1, x2;
    a = parseInt(prompt("Saisir la valeur de a : ").trim());
    b = parseInt(prompt("Saisir la valeur de b : ").trim());
    c = parseInt(prompt("Saisir la valeur de c : ").trim());
    delta = Math.pow(b,2) - (4 * a * c);
    if (delta === 0) {
        x1 = x2 = -b / 2 * a;
        result_container.innerHTML = "L'équation admet deux racines confondues : <br/>x1 = x2 = " + x1;
    } else if (delta > 0) {
        x1 = (-b + Math.sqrt(delta)) / 2 * a;
        x2 = (-b - Math.sqrt(delta)) / 2 * a;
        result_container.innerHTML = "L'équation admet deux racines distinctes : <br/>x1 = " + x1 + 
        "<br/>x2 = " + x2;
    }
    else{
        result_container.textContent = "Pas des racines réelles";
    }
    
    exercice_description.innerHTML = "Résolution de l'équation du second degré avec : a = " 
    + a + ", b = " + b + " et c = " + c;
}

/*
Exercice 6
@Valeur comprise entre 1 et 3
*/
function valeurSortie(){
    let x = 0;
    do {
        x = parseFloat(prompt("Saisir une valeur entre 1 et 3 : ").trim());
    } while (x < 1 || x > 3);
    exercice_description.textContent = "Exercice 06 :: Saisie de la valeur de sortie entre 1 et 3";
    result_container.textContent = "La valeur de sortie est : " + x;
}

/*
Exercice 7
@Valeur comprise entre 10 et 20 avec indication [Plus grand ou plus petit]
*/
function valeurSortieAvecIndication(){
    let x = parseFloat(prompt("Saisir une valeur entre 10 et 20 : ").trim());
    while (x < 10 || x > 20) {
        if (x < 10) {
            x = parseFloat(prompt("Saisir une valeur plus grande que " + x + 
            " mais comprise entre 10 et 20 : ").trim());
        }
        else{
            x = parseFloat(prompt("Saisir une valeur plus petite que " + x + 
            " mais comprise entre 10 et 20 : ").trim());
        }
    }
    exercice_description.textContent = "Exercice 07 :: Saisie de la valeur de sortie entre 10 et 20";
    result_container.textContent = "La valeur de sortie est : " + x;
}

/*
Exercice 8
@Retour de 10 prochaine valeur
*/
function suiteDeDixProchainesValeur(){
    let valeur_depart = parseInt(prompt("Saisir une valeur de départ : ").trim());
    let valeur_limite = valeur_depart + 10;
    result_container.textContent = "";
    for (let i = valeur_depart + 1; i <= valeur_limite; i++) {
        if (i < valeur_limite) {
            result_container.textContent += i + ", ";
        }
        else{
            result_container.textContent += i;
        }     
    }
    exercice_description.textContent = "Exercice 08 :: Les 10 prochaines valeurs à partir de " + valeur_depart;
}

/**
 * Exercice 9
 * @ Table de multiplication
 * **/
function tableMultiplication(){
    let valeur_depart = parseInt(prompt("Saisir une valeur de départ pour la table de multiplication : ").trim());
    let msg = "";
    for (let i = 1; i <= 10; i++) {
        msg += valeur_depart + " * " + i + " = " + (valeur_depart*i) + "<br/>";
    }
    exercice_description.textContent = "Exercice 09 :: Table de multiplication de " + valeur_depart;
    result_container.innerHTML = msg;
}

/**
 * Exercice 10
 * @ Somme des entiers
 * **/
function sommeDesEntiers(){
    let valeur_depart = 0;
    let somme = 0;
    do {
        valeur_depart = Math.abs(parseInt(prompt("Saisir une valeur de départ pour la somme des entiers : ").trim()));
    } while (valeur_depart < 2);
    for (let i = 1; i <= valeur_depart; i++) {
        somme += i;     
    }
    exercice_description.textContent = "Exercice 10 :: La somme des entiers de 1 à " + valeur_depart;
    result_container.textContent = "La somme vaut : " + somme;
}

/**
 * Exercice 11
 * @ Factorielle
 * **/
function factorielle(){
    let valeur_depart = Math.abs(parseInt(prompt("Saisir une valeur de départ pour la foctorielle : ").trim()));
    let fact = 1;
    for (let i = 1; i <= valeur_depart; i++){
        fact *= i;
    }
    exercice_description.textContent = "Exercice 11 :: La factorielle de " + valeur_depart;
    result_container.textContent = "La factorielle vaut : " + fact;
}