const btn = document.querySelector('#btn');
const todoCardsContainer = document.querySelector('#todoCards');
let todoCards = document.querySelectorAll('.todoCard');
const delBtns = document.querySelectorAll('.delBtn');
const count = document.querySelector('#count');
const prenom = "Charly"

// concaténation
console.log("Je m'appelle " + prenom)
// interpolation
console.log(`Je m'appelle ${prenom}`)

refreshCount();

btn.onclick = newCard;

function newCard() {
    const firstCard = todoCardsContainer.firstElementChild;
    const newCard = firstCard.cloneNode(true);
    const newDelBtn = newCard.querySelector('.delBtn');

    newDelBtn.addEventListener('click', () => {
        deleteCard(newCard);
    })

    todoCardsContainer.appendChild(newCard);

    refreshCount();

}

function deleteCard(element) {
    element.remove();

    refreshCount();
}

function refreshCount() {
    todoCards = document.querySelectorAll('.todoCard');
    count.innerHTML = todoCards.length;
}

// ************************************************************************************************************************
// ************************************************************************************************************************
// ************************************************************************************************************************

// exemple d'objet en JS
let charly = {
    id: 1,
    nom: "Ducournau-Guichard",
    prenom: "Charly",
    diplomes: [
        {
            diplome: "Baccalauréat Professionnel Spécialité Commerce",
            anneeObtiention: "2017",
        },
        {
            diplome: "BTS",
            anneeObtiention: "2017",
        },
        {
            diplome: "Baccalauréat Professionnel Spécialité Commerce",
            anneeObtiention: "2017",
        },
    ]
}

console.log(charly)
/*
    diplomes : 
        0 : {
                diplome: 'Baccalauréat Professionnel Spécialité Commerce',
                anneeObtiention: '2017'
            }
        1 : {
                diplome: 'BTS',
                anneeObtiention: '2017'
            }
        2 : {
            diplome: 'Baccalauréat Professionnel Spécialité Commerce',
            anneeObtiention: '2017'
        }
        length : 3
        
    id : 1
    nom : "Ducournau-Guichard"
    prenom : "Charly"
*/
