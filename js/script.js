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
function suite_nombre_pairs(){
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
function suite_nombre_impairs(){
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
function annee_bissextile(){
    let annee = parseInt(prompt("Saisir l'année : ").trim());
    exercice_description.textContent = "Exercice 04 :: LLa vérification de l'année " + annee + 
    " si elle est bissextile";
    if (annee % 4 === 0 && annee % 100 !== 0) {
        result_container.textContent = "Oui c'est une année bissextile";
    }
    else{
        result_container.textContent = "Non ce n'est pas une année bissextile";
    }
}

/*
Exercice 6
@Valeur comprise entre 1 et 3
*/
function valeur_sortie(){
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
function valeur_sortie_avec_indication(){
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
function suite_de_dix_prochaine_valeur(){
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
function table_multiplication(){
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
function somme_entiers(){
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

let my_event = 'click';
let btn_ex1 = document.getElementById("ex1");
let btn_ex2a = document.getElementById("ex2a");
let btn_ex2b = document.getElementById("ex2b");
let btn_ex3 = document.getElementById("ex3");
let btn_ex4 = document.getElementById("ex4");
let btn_ex6 = document.getElementById("ex6");
let btn_ex7 = document.getElementById("ex7");
let btn_ex8 = document.getElementById("ex8");
let btn_ex9 = document.getElementById("ex9");
let btn_ex10 = document.getElementById("ex10");
let btn_ex11 = document.getElementById("ex11");
btn_ex1.addEventListener(my_event, login);
btn_ex2a.addEventListener(my_event, suite_nombre_pairs);
btn_ex2b.addEventListener(my_event, suite_nombre_impairs);
btn_ex3.addEventListener(my_event, permutation);
btn_ex4.addEventListener(my_event, annee_bissextile);
btn_ex6.addEventListener(my_event, valeur_sortie);
btn_ex7.addEventListener(my_event, valeur_sortie_avec_indication);
btn_ex8.addEventListener(my_event, suite_de_dix_prochaine_valeur);
btn_ex9.addEventListener(my_event, table_multiplication);
btn_ex10.addEventListener(my_event, somme_entiers);
btn_ex11.addEventListener(my_event, factorielle);