const countdownEl = document.getElementById("countdown");
const listNumberEl = document.getElementById("numbers-list");

// con il setInterval creo un countdown
let time = 3000;

const interval = setInterval(() => {
  time -= 1000;
  countdownEl.innerHTML = time / 1000;

  if (time === 0) {
    clearInterval(interval);
    countdownEl.classList.add("d-none");
  }
}, 1000);

// ho creato due metodi:

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
