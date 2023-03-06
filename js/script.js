// Consegna
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.


/* 
- memorizzo l'elemento bottone

- memorizzo l'elemento griglia

- memorizzo l'elemento per scegliere il livello di difficoltà.

- memorizzo una variabile per il totale di celle.
- memorizzo una variabile per il numero di colonne.

- creo una funzione che mi generi l'elemento (div) con classe .square. e lo appenda al contenitore griglia.

al CLICK del bottone:


? SE il livello scelto è DIFFICILE:
    ° il numero totale di celle sarà 49.
    ° le colonne saranno 7.

: ALTRIMENTI SE il livello scelto è MEDIO
    ° il numero totale di celle sarà 81
    ° le colonne saranno 9.
:ALTRIMENTI 
    ° il numero totale di celle sarà 100
    ° le colonne 10.

- creo una griglia di celle in base alla funzione precedentemente creata.

- stilizzo la griglia in modo che la sua larghezza sia data dall moltiplicazione della larghezza del quadrato per il numero di colonne.

parte 2


- memorizzo un'array vuota di bombe

- memorizzo una variabile che indichi il punteggio.

- memorizzo una variabile vuota delle celle selezionate.

- memorizzo l'elemento html del punteggio

- genero una funzione che generi un numero random.

- genero una funzione che generi le bombe con totale di 16 massimo.

- genero le bombe. 

- genero una variabile all'interno del ciclo for dei quadrati, che indichi le celle cliccate.

al CLICK della cella: 
    ? SE il numero della bomba è incluso nelle cliccate 
        ° assegno la classe bomba
        ° stampo il punteggio e "hai perso"

    : ALTRIMENTI 
        ? SE la cella cliccata non è inclusa in quelle già selezionate (array)
            ° la pusho.
            ° aumento il punteggio.

        : ALTRIMENTI 
            ° stampo che la cella è già stata cliccata.

        ? SE il numero delle celle è uguale alla somm adelle celle meno la lunghezza dell'array
            ° stampo che "hai vinto"


*/


// console.log("prova sa sa");


// - memorizzo l'elemento bottone
let startGameButton = document.getElementById("start_game");

// - memorizzo l'elemento griglia
let gridEl = document.getElementById("grid_container");

// memorizzo elemento html livello
let selectLevel = document.getElementById("levels");

// memorizzo l'elemento punteggio
let finalScore = document.getElementById("punteggio");


// memorizzo un'array vuota delle bombe
const bombe = [];

// - memorizzo un'array vuota delle celle selezionate.
const selected = [];

// - memorizzo una variabile che indichi il punteggio.
let score = 0;









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


    // BOMBE___
    bombsCreator(bombe, totalCells);

    // test
    console.log(bombe);


            
    for(let i = 1; i <= totalCells; i++){
    

        let cell = squareGenerator(i);


        cell.addEventListener("click", function(){

            cell.classList.toggle("normal");

        })
    
    }



   
});



// FUNZIONI_________________________________

// creo la funzione per creare i quadrati

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

// PARTE 2____

// creo la funzione che generi le bombe in base al numero random precedente

function bombsCreator(array, totalCells){

    let contatore;
    
    contatore = 0;
    
    while(array.length < 16){
            let newBomb = createRandomNumber(1, totalCells);
    
            if(!array.includes(newBomb)){
                array.push(newBomb);
            }
    
        contatore++;
    
    }
    

}



// creo la funzione per un numero random

function createRandomNumber(min, max){

    let random = Math.floor(Math.random()* (max - min + 1) + min);

    return random;
}