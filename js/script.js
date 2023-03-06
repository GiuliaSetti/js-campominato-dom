// Consegna:
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.




// - memorizzo l'elemento bottone
let startGameButton = document.getElementById("start_game");

// - memorizzo l'elemento griglia
let gridEl = document.getElementById("grid_container");


let selectLevel = document.getElementById("levels");

// - memorizzo una variabile cella che valga 100.
let totalCells;

// memorizzo una variabile per il numero di colonne
let colNumber;



startGameButton.addEventListener("click", function(){

    gridEl.innerHTML = "";

    let selectLevelEl = selectLevel.value;


    if(selectLevelEl == "Hard"){

        totalCells = 49;

        colNumber = 7;
        
        
    } else if (selectLevelEl == "Medium"){
   
        totalCells = 81;
     
        colNumber = 9;
            

    } else {

        totalCells = 100;
        
        colNumber = 10;
        
    }

    gridEl.style.width = `calc(50px * ${colNumber})`;


            
    for(let i = 1; i <= totalCells; i++){
    

        let cell = squareGenerator(i);


        cell.addEventListener("click", function(){

            cell.classList.toggle("lightpurple");

        })
    
    }



   
});



// creo la funzione

function squareGenerator(testo){

    // creo un elemento div
    let newEl = document.createElement("div");

    // assegno all'elemento la classe cell
    newEl.classList.add("cell");

    // all'interno dell'elemento in HTML introduco il parametro testo

    newEl.innerHTML = testo;

    gridEl.append(newEl);


    return newEl

}