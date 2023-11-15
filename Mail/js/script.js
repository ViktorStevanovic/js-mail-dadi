// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere (createvi una piccola lista di email),
// stampa un messaggio appropriato sull’esito del controllo.

const vipList = ['viktor', 'marco', 'mirko', 'silvia']
console.log(vipList)

let userName = prompt('Type your name please')

if(vipList.includes(userName)) {
    console.log('You can enter')
}
else {
    console.log('Sorry, you are not on the list')
}