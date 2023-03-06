let start = document.getElementById("start")
let reset = document.getElementById("reset")
let choix = document.getElementsByClassName("choix")
let choiceAnswers = document.getElementsByClassName('choiceAnswers');



/////Table of Questions and responses/////

let Questions = [
    {
        question: "Qui à crée Javascript ?",
        choiceAnswer: [" Choix 1: Brendan Eich", " Choix 2: Bill Gates", " Choix 3: John Wayne"],
        answer: 0

    },
    {
        question: " aux cours de quel année à été inventé le langage C de programmation ?",
        choiceAnswer: ["  Choix 1: en 1970-1971 ", " Choix 2: 1978  ", " Choix 3:197"],
        answer: 1

    },

    {
        question: "l' update du python 2 aux python3 c est passé durant quel mois ?",
        choiceAnswer: [" Choix 1: Avril ", " Choix 2: Octobre  ", " Choix 3: Décembre "],
        answer: 2

    },
    {
        question: " En quel Année le langage MEL à été creer ?",
        choiceAnswer: [" Choix 1: 1998 ", " Choix 2: 2000 ", " Choix 3: 1995 "],
        answer: 0

    },
    {
        question: " à quoi fait référence  le langage MEL ?",
        choiceAnswer: [" Choix 1: à la 2D ", " Choix 2: Pour machine 4 Axes  ", " Choix 3: à la 3D "],
        answer: 2

    },
    {
        question: " Il y a plusieur façon d'ecrire du C++  de manière fonctionnel ?",
        choiceAnswer: [" Choix 1: à la main ", " Choix 2:  En pyrogravure   ", " Choix 3: ou en blueprint "],
        answer: 2

    },
    {
        question: " Quel est la première page web mise en ligne en 1990 ?",
        choiceAnswer: [" Choix 1: http://nxoc01.cern.ch/hypertext/WWW/TheProject.html  ", " Choix 2: http://hypertext/WWW/TheProject.", " Choix 3:  http://Project.world.wide.web.html "],
        answer: 0

    },
    {
        question: "Quel est l inventeur du Web ?",
        choiceAnswer: [" Choix 1: Tom Hawk  ", " Choix 2: Tim Berners-Lee ", " Choix 3: Jennifer Hops "],
        answer: 1

    },
    {
        question: " Avec quel modem ont surfait en 1999 ?",
        choiceAnswer: [" Choix 1:  un modem 12k ", " Choix 2: un modem adsl 1.0  ", " Choix 3: un modem 56k "],
        answer: 2

    },
    {
        question: " Netscape communicator est t il un navigageur internet  ?",
        choiceAnswer: [" Choix 1: oui  ", "Choix 2: peut être ", "Choix 3: Non "],
        answer: 0

    },

]

let index = 0 ;



function clickOfAffichage(){
    start.addEventListener("click", function (){

        for (let i = 0; i < choiceAnswers.length; i++) {
            start.innerHTML = "Question suivante";
            let result = document.getElementById("afficheMoiQuestion")
            result.innerHTML = Questions[index].question


            for (let i = 0; i < choix.length; i++) {
                choix[i].innerHTML = Questions[index].choiceAnswer[i];
                console.log("blbla");
            }
         }

    })
}
clickOfAffichage()

function nextQuestions(){
for (let i = 0; i < choix.length; i++){
    choix[i].addEventListener("click", function (){
        index++;
        console.log("fhqsdfh");

                })
            }
}
nextQuestions()
