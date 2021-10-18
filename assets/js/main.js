//jSnack1-----------------------------------------------------------------------

// const jsnack1 = document.querySelector("div.jSnack1");

// const firstNumber = parseInt(prompt("Esercizio 1 Inserisci un numero"));
// const secondNumber = parseInt(prompt("Esercizio 1 Inserisci un numero"));

// if (firstNumber > secondNumber) {
//     const results = `<p> Il primo numero è il maggiore </p>`
//     jsnack1.innerHTML = results;

// } else if (secondNumber > firstNumber) {
//     const results = `<p> Il secondo numero è il maggiore </p>`
//     jsnack1.innerHTML = results;

// } else {
//     const results = `<p> I numeri sono uguali </p>`
//     jsnack1.innerHTML = results;
// }


//jSnack2-----------------------------------------------------------------------

//const jsnack2 = document.querySelector("div.jSnack2");
//
//const firstWord = prompt(" Esercizio 2 Inserisci una parola");
//const secondWord = prompt(" Esercizio 2 Inserisci una parola");
//
//if (firstWord.length >= secondWord.length) {
//    const results = `<p> Parola 1 ${firstWord}  Parola 2 ${secondWord} </p>`
//    jsnack1.innerHTML = results;
//
//} else {
//    const results = `<p> Parola 2 ${secondWord} Parola 1 ${firstWord} </p>`
//    jsnack2.innerHTML = results;
//}


//jSnack3-----------------------------------------------------------------------

// const jsnack3 = document.querySelector("div.jSnack3");
// let counter = 0;

// for (let i = 0; i < 10; i++) {
//     const number = parseInt(prompt(`Esercizio 3 Inserisci un numero -- ${i}`));
//     counter += number;
// }

// const results = `<p> ${counter} </p>`;
// jsnack3.innerHTML = results;


//jSnack4-----------------------------------------------------------------------

// const verificaBtn = document.getElementById("verifica");
// const inputName = document.getElementById("invitato");
// const checkElement = document.getElementById("check");
// const invitati = ["Gigi", "Mario", "Pierpaolo"];

// verificaBtn.addEventListener(`click`, function () {
//     const nameValue = inputName.value;
//     for (let i = 0; i < invitati.length; i++) {
//         if (nameValue === invitati[i]) {
//             checkElement.innerHTML = `${nameValue} è iniviato`;
//             return 0;

//         } else {
//             checkElement.innerHTML = `${nameValue} non è stato invitato`;
//         }
//     }
// })



//jSnack5-----------------------------------------------------------------------

// const jsnack5 = document.querySelector("div.jSnack5");

// const array = [""];
// let j = 0;

// for (let i = 0; i < 6; i++) {
//     const number = parseInt(prompt(`Esercizio 5 Inserisci un numero -- ${i}`));
//     if (number % 2 != 0) {
//         array[j] = number;
//         j = j + 1;
//         console.log(array);
//     }
// }
// const results = `<p> ${array} </p>`;
// jsnack5.innerHTML = results;



//jSnack6-----------------------------------------------------------------------

// const jsnack6 = document.querySelector("div.jSnack6");
// const limit = parseInt(prompt(`Esercizio 6 Inserisci un numero`));

// const number = [];

// for (let i = 0; i < limit; i++) {
//     number[i] = Math.pow(i, 3);
// }

// const results = `<p> ${number} </p>`;
// jsnack6.innerHTML = results;


//jSnack7-----------------------------------------------------------------------

// const jsnack7 = document.querySelector("div.jSnack7");

// let x = 1;
// jsnack7.innerHTML += x;

// for (x = 1; x < 1000; x++) {
//     x = x * 2;
//     if (x < 1000) {
//         jsnack7.innerHTML += "  " + x;
//     }

//     x = x - 1
// }



//jSnack8-----------------------------------------------------------------------

// const jsnack8 = document.querySelector("div.jSnack8");

// var x = (prompt("Esercizio 6 Inserisci un numero di 4 cifre"))
// var tot = 0;

// if (x.length == 4) {
//     for (let i = 0; i < 4; i++) {
//         y = x.charAt(i);
//         y = parseInt(y);
//         tot += y;
//     }
//     const results = `<p> La somma delle cifre è ${tot} </p>`;
//     jsnack8.innerHTML = results;
// }
// else {
//     alert("Il numero non è di 4 cifre")
// }



//jSnack9-----------------------------------------------------------------------

// const jsnack9 = document.querySelector("div.jSnack9");

// let sum = 0;
// let media = 0;

// for (let i = 0; i < 10; i++) {
//     sum += i;
//     media = sum;
// }
// media = media / 10;

// const results = `<p> La somma è: ${sum} <br> La media è: ${media} </p>`;
// jsnack9.innerHTML = results;
