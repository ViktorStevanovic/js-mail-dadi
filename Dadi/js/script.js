// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

const myNum = Math.floor(Math.random() * 6) + 1
    console.log('Player-Number ' + myNum)

const aiNum = Math.floor(Math.random() * 6) + 1
    console.log('Pc-Number ' + aiNum)
   
    if (myNum < aiNum) {
        console.log('PC WINS!')
    }
    else {
        console.log('HUMAN WINS!')
    }
