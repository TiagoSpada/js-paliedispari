// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// salvo gli elementi html in variabili
const numeroUtente = document.getElementById('inputNumber')
const sceltaUtente = document.getElementById('scelta-utente');
const buttonCheck = document.getElementById('submit');

buttonCheck.addEventListener('click', function(){
    //allo schiacciare del bottone prendo i valori dei due input
    const numeroUtenteValue = parseInt(numeroUtente.value);
    const sceltaUtenteValue = sceltaUtente.value;
    // verifico che il numero inserito rispetti le condizioni
    if(numeroUtenteValue >= 1 && numeroUtenteValue <= 5){
        console.log("numero utente" + numeroUtenteValue);
        // richiamo la variabile dandogli in input il numero dell'utente
        const result = sommaPari(numeroUtenteValue);
        // controllo che il risultato della funzione sia uguale alla scelta dell'utente
        if(result === sceltaUtenteValue){
            console.log("ha vinto l'utente")
        }else{
            console.log("ha vinto il PC");
        }
        
    }else{
        console.log("numero inserito non valido")
    }

})


function sommaPari(numeroUtente){
    // genero il numero del pc
    const numeroPC = Math.floor(Math.random() * 5)+1;
    console.log("il numero del pc è " + numeroPC);
    // calcolo la somma dei due numeri
    const sum = numeroUtente + numeroPC;
    console.log("la somma è " +sum);
    // verifico se è pari o dispari
    const pari = sum % 2;
    if(pari === 0){
        return 'pari';
    }else{
        return 'dispari';
    }
}
