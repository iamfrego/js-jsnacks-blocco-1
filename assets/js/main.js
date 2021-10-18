//jSnack1-----------------------------------------------------------------------

// const jsnack1 = document.querySelector("div.jSnack1");

// const firstNumber = parseInt(prompt("Inserisci un numero"));
// const secondNumber = parseInt(prompt("Inserisci un numero"));

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
//const firstWord = prompt("Inserisci una parola");
//const secondWord = prompt("Inserisci una parola");
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
//     const number = parseInt(prompt(`Inserisci un numero -- ${i}`));
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
//     const number = parseInt(prompt(`Inserisci un numero -- ${i}`));

//     if (number % 2 != 0) {
//         array[j] = number;
//         j = j + 1;
//         console.log(array);
//     }
// }
// const results = `<p> ${array} </p>`;
// jsnack5.innerHTML = results;


//jSnack5-----------------------------------------------------------------------


// const jsnack6 = document.querySelector("div.jSnack6");

// const number = parseInt(prompt(`Inserisci un numero -- ${i}`));

