import {insertedValues} from './valuesData.js'
import {renderEntries, entriesSum} from './render.js'


export function registerValue(array) {

    const modal = document.querySelector(".modal__controller")
    const inputs = document.querySelectorAll("form > input")
    const registerButton = document.querySelector('form > button[type=submit]')

    let newEntry = {}
    let count = 0
    
    registerButton.addEventListener('click', (event) => {

        event.preventDefault()


        newEntry.id = array.length + 1

        inputs.forEach((input) => {
            if (input.value === "") {
              count++;
            }
            
            if (input.type === "number") {
                newEntry.value = Number(input.value);
              } else {
                newEntry.categoryID = input.value;
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
          
        modal.close()
    })
}