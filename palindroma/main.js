// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// chiedo la parola all'utente
const inputParola = prompt('inserisci la parola').toLowerCase();//tolgo l'eventuale maiuscola a inizio frase
// richiamo la funzione inserendo la parola dell'utente
const checkPali = palindroma(inputParola);
// controllo in bae al risultato della funzione se è palindroma o no
if(checkPali){
    console.log("la parola è palindroma");
}else {
    console.log('la parola non è palindorma');
}

// gestisco la stringa come se fosse un array
function palindroma(inputParolaPal){
    // prendo la lunghezza della stringa
    const length = inputParolaPal.length;
    console.log(inputParolaPal);
    // console.log(inputParolaPal.length);
    // creo un ciclo che si ripete in base alla lunghezza della stringa
    for(let i=0; i<length; i++){
        // console.log(inputParolaPal[i]);
        // console.log(inputParolaPal[length - 1 -i]); //leggiamo la stringa partendo dalla fine
        if(inputParolaPal[i] !== inputParolaPal[length - 1 -i]){
            return false;
        }else {
            return true;
        }
    }
}