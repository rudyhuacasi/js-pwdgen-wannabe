//Chiedi all’utente il suo nome,
const userName = prompt ('Inserisci il nome');
//poi chiedi il suo cognome,
const userLastname = prompt ('Inserisci il cognome');
//poi chiedi il suo colore preferito,
const userFavoritecolor = prompt ('Inserisci il tuo colore preferito');
//Infine scrivi sulla pagina nomecognomecolorepreferito21,
const userAge = '21';
const myPerson= userName + userLastname + userFavoritecolor + userAge; 
document.getElementById('no-cog-co').innerHTML = myPerson;
//Bonus 1: visualizzate le informazioni anche nella console del browser,
//Bonus 2: provate a generare un numero casuale con Javascript,

