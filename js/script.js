const countdownEl = document.getElementById("countdown");
const listNumberEl = document.getElementById("numbers-list");
const answersFormEl = document.getElementById("answers-form");
const inputEl = answersFormEl.querySelectorAll(".form-control");
const messageParagraphEl = document.getElementById("message");
const paragraphInstructionEl = document.getElementById("instructions");

// con il setInterval creo un countdown
let time = 10000;

const interval = setInterval(() => {
  time -= 1000;

  countdownEl.innerHTML = time / 1000;

  if (time === 0) {
    clearInterval(interval);
    countdownEl.classList.add("d-none");
    answersFormEl.classList.remove("d-none");
    listNumberEl.classList.add("d-none");
    paragraphInstructionEl.classList.add("d-none");
  }
}, 1000);

// HO CREATO DUE METODI PER GENERARE L'ARRAY DI NUMERI CASUALI:

// questo per generare numeri casuali
const randomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);

// questo per creare un array di numeri casuali
/**
 *
 * @param {num} length questo indica la lunghezza dell'array che si vuole generare
 * @returns {array}
 */
function createRandomNumberArray(length) {
  let array = [];
  for (let i = 0; i < length; i++) {
    array.push(randomNumber(1, 50));
  }

  return array;
}

// vado a inserire nel dom l'array di numeri casuali
const numberArray = createRandomNumberArray(5);

for (let i = 0; i < numberArray.length; i++) {
  listNumberEl.innerHTML += `<li>${numberArray[i]}</li>`;
}

// creo un array con i numeri inseriti negli input
function createInputArray(inputNumber) {
  const array = [];

  for (let i = 0; i < inputNumber.length; i++) {
    array.push(parseInt(inputNumber[i].value));
  }

  return array;
}

// associo all'evento submit del form la comparazione dei numeri dei due array
// utilizzando un contatore per indicare quanti numeri sono stati indovinati e riportarlo a schermo

answersFormEl.addEventListener("submit", (e) => {
  e.preventDefault();

  let cont = 0;
  const inputArray = createInputArray(inputEl);

  for (let i = 0; i < inputArray.length; i++) {
    if (numberArray.includes(inputArray[i])) {
      cont++;
    }
  }

  if (cont < 5) {
    messageParagraphEl.innerHTML = `Hai indovinato ${cont} numeri`;
  } else {
    messageParagraphEl.innerHTML = `Hai indovinato tutti i numeri!!!`;
  }
});

// const arr = [1, 2, 3, 3, 4, 5, 6, 6, 7];
// const arrNew = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arrNew.includes(arr[i]) === false) {
//     arrNew.push(arr[i]);
//   }
// }
// console.log(arrNew);
