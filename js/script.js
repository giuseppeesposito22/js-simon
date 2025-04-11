const countdownEl = document.getElementById("countdown");

// con il setInterval creo un countdown
let tempo = 30000;

const interval = setInterval(() => {
  tempo -= 1000;
  countdownEl.innerHTML = tempo / 1000;

  if (tempo === 0) clearInterval(interval);
}, 1000);
