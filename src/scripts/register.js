import { renderEntries, entriesSum } from "./render.js";

export function registerValue(array) {
  const modal = document.querySelector(".modal__controller");
  const inputNumber = document.querySelector(".value__container .entry__category");
  const inputRadios = document.querySelectorAll(".category__container input[type=radio]");
  const registerButton = document.querySelector("form > .buttons__container > button[type=submit]");

  let newEntry = {};
  let count = 0;
  
  registerButton.addEventListener("click", (event) => {
    event.preventDefault();

    
    newEntry.id = array.length + 1
    newEntry.value = Number(inputNumber.value)
    
    inputRadios.forEach((inputRadio) => {

      if (inputRadio.checked === true) {
        newEntry.categoryID = Number(inputRadio.value);
      }
    });
    
    if (inputNumber.value === "") {
      count++;
    }

    if (count !== 0) {
      count = 0;

      return alert("Preencha o valor e defina o tipo");
    }

    array.push(newEntry);
    newEntry = {};

    renderEntries(array);
    entriesSum(array);

    modal.close();
  });
}
