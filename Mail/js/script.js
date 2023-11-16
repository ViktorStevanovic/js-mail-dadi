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

for (let i = 0; i < vipList.length; i++){
    const currentMail = vipList [i];
    console.log(i, currentMail);
}

// Correzione

const mailingList = [
    'havanaclub@gmail.com',
    'vogliadimare@gmail.com',
    'gino@gmail.com',
    'mariangelina@fantozzi.it',
    'jjrabbit@gmail.com',
    'bpitt@protonmail.com'
];

const buttonElement = document.querySelector('button');
const outputElement = document.querySelector("#output-result");

buttonElement.addEventListener('click', function(){
    const userChoice = document.getElementById('input-email').value;
    // let stato = 'non lo trovo';
    let isMailFound = false;

    // ? controlla che la mail sia nella lista
    for (let i = 0 ; i < mailingList.length ; i++){
        if (userChoice == mailingList[i]){
            isMailFound = true;
        }
    }

    console.log(isMailFound);

    if (isMailFound == true) {
        outputElement.innerHTML = 'Access has been granted';
        outputElement.classList.add('text-green');
        outputElement.classList.remove('text-red');
    } else {
        outputElement.innerHTML = 'Access has been denied';
        outputElement.classList.add('text-red');
        outputElement.classList.remove('text-green');
    }
})