import {renderEntries, entriesSum} from './render.js'


export function registerValue(array) {

    const modal = document.querySelector(".modal__controller")
    const inputs = document.querySelectorAll(".entry__category")
    const registerButton = document.querySelector('form > .buttons__container > button[type=submit]')

    let newEntry = {}
    let count = 0
    

    registerButton.addEventListener('click', (event) => {

        event.preventDefault()

        newEntry.id = array.length + 1

        inputs.forEach((input) => {

          console.log(input)  
          
            if (input.value === "") {
              count++;
            }
            
            if (input.type === "number") {
                newEntry.value = Number(input.value);
              } else if (input.name === "valueType"){
                newEntry.categoryID = Number(input.value);
              }
            })

            if (count !== 0) {
                count = 0
          
                return alert("Preencha o valor e defina o tipo")
              }

              array.push(newEntry)
              newEntry = {}

              inputs.forEach((input) => {
                if (input.type === "number") {
                    input.value = ""
                }
              });

              renderEntries(array);
              entriesSum(array)
          
        modal.close()
    })
}