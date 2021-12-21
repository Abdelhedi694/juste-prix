let error = document.querySelector("small");
error.classList.add("hide");

let aleatoire = Math.floor(Math.random() * 1001);

let inputSaisi = document.querySelector("#prix");
inputSaisi.addEventListener("keyup", () => {
  if (isNaN(inputSaisi.value)) {
    error.classList.remove("hide");
  } else {
    error.classList.add("hide");
  }
});

function checkForm() {
  if (inputSaisi.value > aleatoire) {
    let instruction = document.querySelector("#instructions");
    instruction.innerHTML = `<p>Vous avez essayé ${inputSaisi.value} dommage c'est moins !</p>`;
    instruction.classList.remove("moins");
    instruction.classList.add("plus");
    inputSaisi.value = "";
  } else if (inputSaisi.value < aleatoire) {
    let instruction = document.querySelector("#instructions");
    instruction.innerHTML = `<p>Vous avez essayé ${inputSaisi.value} dommage c'est plus !</p>`;
    instruction.classList.remove("plus");
    instruction.classList.add("moins");
    inputSaisi.value = "";
  } else if (inputSaisi.value == aleatoire) {
    let instruction = document.querySelector("#instructions");
    instruction.innerHTML = `BRAVO ! c'etait bien ${aleatoire}`;
    instruction.classList.remove("moins", "plus");
    instruction.classList.add("fini");
    inputSaisi.value = "";
  }
}

document.querySelector("#formulaire").addEventListener("submit", function (e) {
  e.preventDefault();
  checkForm();
});
