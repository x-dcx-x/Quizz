let depense = document.getElementsByClassName('depense');
let recette = document.getElementsByClassName("recette");
let result = document.getElementById('result');
let total;
let totalCat4 = document.getElementById("totalCat4Résult")
let resultTotal = document.getElementById("resultTotal");
let reset = document.getElementById("reset");
result.addEventListener('click', function (){

    let resultatBase = 0;
    let resultatBaseRecette = 0;

    for ( keyDep of depense) {
        resultatBase += (parseFloat(keyDep.value));
    }

    for( keyRecette of recette){
        resultatBaseRecette += (parseFloat(keyRecette.value));
    }
    //Exemple utilisation de la boucle for de la padawan
    // for(let i = 0; i < depense.length; i++) {
    //     resultatBase += (parseFloat(depense[i].value));
    //     console.log(depense[i].value);
    // }

    total = resultatBaseRecette - resultatBase;
    if(total < 0) {
        resultTotal.innerHTML=total;
        totalCat4.innerHTML = "Veuillez vous refaire car votre compte est en négatif";
    }
    else if (total === 0){
        resultTotal.innerHTML = total;
        totalCat4.innerHTML = "vous etes ni riche ni pauvre  juste en porte a faux!";
    }
    else {
        resultTotal.innerHTML= total;
        totalCat4.innerHTML = "C est bien vous progresser dans vos richesse";
    }

    reset.addEventListener('click', function () {
        window.location.reload();

    });

    function seeQuestion (next) {
        for (let element of Question) {
            quiz.text(Question[next].question);
            //Create button for the answers
            for (let i = 0; i < answers.length; i++) {
                answers[i].innerHTML = (Question[index].choicesAnswer[i]);


