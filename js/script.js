// Generare un numero casuale tra 1 e 6 per simulare il lancio di un dado (giocata 1).

let primo_lancio_dado = Math.floor(Math.random() * (6 - 1) ) + 1;
console.log(primo_lancio_dado);


// Generare un secondo numero casuale tra 1 e 6, che sarà la seconda giocata.
let secondo_lancio_dado = Math.floor(Math.random() * (6 - 1) ) + 1;
console.log(secondo_lancio_dado);


// Comunicare quali dei due utenti (tra giocatore 1 e giocatore 2) ha vinto.
if(primo_lancio_dado > secondo_lancio_dado) {
    document.getElementById('password').innerHTML= "ha vinto il giocatore 1"
}else if(primo_lancio_dado == secondo_lancio_dado) {
    document.getElementById('password').innerHTML= "è un pareggio"
}else {
    document.getElementById('password').innerHTML= "ha vinto il giocatore 2"
}