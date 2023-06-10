const title = document.getElementById("title");
title.innerText = "TOMBOLA";

const tabella = function () {
  const tabell = document.getElementById("contenitore");

  for (let i = 0; i < 90; i++) {
    const celle = document.createElement("span");
    celle.classList.add("stile-lista");
    celle.innerHTML = i + 1;
    tabell.appendChild(celle);
  }
};
tabella();

const button = document.getElementById("button");

button.addEventListener("click", function () {
  let x = Math.floor((Math.random() * 90) + 1);
  let y = document.querySelectorAll(".stile-lista");
  y.forEach(y => {
    if (Number(y.innerText) === x) {
       y.classList.add('funziona')
    }
  });
});
