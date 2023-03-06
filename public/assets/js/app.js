let start = document.getElementById("start")
let reset = document.getElementById("reset")
let choix = document.getElementsByClassName("choix")
let choiceAnswers = document.getElementsByClassName('choiceAnswers');
let recap = document.getElementById("récapQuestionsOfResponse");


/////Table of Questions and responses/////

let Questions = [
    {
        question: "Qui à crée Javascript ?",
        choiceAnswer: [" Choix 1: Brendan Eich", " Choix 2: Bill Gates", " Choix 3: John Wayne"],
        answer: 0

    },
    {
        question: " aux cours de quel année à été inventé le langage de programmation C ?",
        choiceAnswer: ["  Choix 1:  1972 ", " Choix 2: 1978  ", " Choix 3:197"],
        answer: 0

    },

    {
        question: "l' update du python 2 aux python3 c est passer durant quel mois ?",
        choiceAnswer: [" Choix 1: Avril ", " Choix 2: Octobre  ", " Choix 3: Décembre "],
        answer: 2

    },
    {
        question: " En quel année le langage MEL à été créer ?",
        choiceAnswer: [" Choix 1: 1998 ", " Choix 2: 2000 ", " Choix 3: 1995 "],
        answer: 0

    },
    {
        question: " à quoi fait référence  le langage MEL ?",
        choiceAnswer: [" Choix 1: à la 2D ", " Choix 2: Pour machine 4 Axes  ", " Choix 3: à la 3D "],
        answer: 2

    },
    {
        question: " Il y a plusieurs façons d'écrires du C++  de manière fonctionnel ?",
        choiceAnswer: [" Choix 1: à la main ", " Choix 2:  En pyrogravure   ", " Choix 3: ou en blueprint "],
        answer: 2

    },
    {
        question: " Quel est la première page web mise en ligne en 1990 ?",
        choiceAnswer: [" Choix 1: http://nxoc01.cern.ch/hypertext/WWW/TheProject.html  ", " Choix 2: http://hypertext/WWW/TheProject.", " Choix 3:  http://Project.world.wide.web.html "],
        answer: 0

    },
    {
        question: "Quel est l' inventeur du Web ?",
        choiceAnswer: [" Choix 1: Tom Hawk  ", " Choix 2: Tim Berners-Lee ", " Choix 3: Jennifer Hops "],
        answer: 1

    },
    {
        question: " Avec quel modem ont surfait en 1999 ?",
        choiceAnswer: [" Choix 1:  un modem 12k ", " Choix 2: un modem adsl 1.0  ", " Choix 3: un modem 56k "],
        answer: 2

    },
    {
        question: " Netscape communicator est t' il un navigateur internet  ?",
        choiceAnswer: [" Choix 1: oui  ", "Choix 2: peut être ", "Choix 3: Non "],
        answer: 0

    },

]

let index = 0;
answer = true
let autresResponse = false

function clickOfAffichage() {
    start.addEventListener("click", function () {

        for (let i = 0; i < choiceAnswers.length; i++) {
            start.innerHTML = "Question suivante";
            let result = document.getElementById("afficheMoiQuestion")
            if(index > 9) {
                start.remove();
                recap.innerHTML ="Qui à crée Javascript ? <br/>" +
                "Réponse: Choix 1: Brendan Eich\n<br/><br/>" +
                "\n" +
                "aux cours de quel année à été inventé le langage de programmation C ?\n<br/>" +
                "Réponse: Choix 1:  1972 \n<br/><br/>" +
                "\n" +
                "l' update du python 2 aux python3 c est passer durant quel mois ?\n<br/>" +
                "Réponse: Choix 2: Octobre\n<br/><br/><br/>" +
                "\n" +
                "En quel année le langage MEL à été créer ?\n<br/>" +
                "Réponse: Choix 1: 1998\n<br/><br/>" +
                "\n" +
                "à quoi fait référence  le langage MEL ?\n<br/>" +
                "Réponse: Choix 3: à la 3D \n<br/><br/>" +
                "\n" +
                "Il y a plusieurs façons d'ecrires du C++  de manière fonctionnel ?\n<br/>" +
                "Réponse:  Choix 3: ou en blueprint\n<br/><br/>" +
                "\n" +
                "Quel est la première page web mise en ligne en 1990 ?\n<br/>" +
                "Réponse: Choix 1: http://nxoc01.cern.ch/hypertext/WWW/TheProject.html\n<br/><br/>" +
                "\n" +
                "Quel est l' inventeur du Web ?\n<br/>" +
                "Réponse : Choix 2: Tim Berners-Lee\n<br/><br/>" +
                "\n" +
                "Avec quel modem ont surfait en 1999 ?\n<br/>" +
                "Choix 3: un modem 56k \n<br/><br/>" +
                "\n" +
                " Netscape communicator est t il un navigateur internet  ?\n<br/>" +
                " Choix 1: oui";
            }
            result.innerHTML = Questions[index].question
            for (let i = 0; i < choix.length; i++) {
                choix[i].innerHTML = Questions[index].choiceAnswer[i];
            }
        }
    })
}

clickOfAffichage()

function nextQuestions() {
    for (let i = 0; i < choix.length; i++) {
        choix[i].addEventListener("click", function () {
            index++;
        })
    }
}

nextQuestions()
reset.addEventListener('click', function () {
    window.location.reload();

});