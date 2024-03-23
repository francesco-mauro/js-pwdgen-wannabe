// alert("Ciao")

// chiediamo all'utente il nome
let userName = prompt ("Ciao utente! Qual'è il tuo nome?") //string
console.log(userName, typeof userName);

// chiediamo all'utente il congome
let userSurname = prompt ("E qual'è il tuo cognome?") //string
console.log(userSurname, typeof userSurname);


// chiediamo all'utente il suo colore preferito
let userColor = prompt ("Mi diresti il tuo colore preferito?") //string
console.log(userColor, typeof userColor);


// stampa output
// preparo il messaggio
const resultMessage = `${userName}${userSurname}${userColor}21`; //string
console.log(resultMessage, typeof resultMessage);

// stampo la pagina
document.getElementById("result").innerHTML = resultMessage;
