import {insertedValuesfiltered} from './valuesData.js'
import {renderEntries, entriesSum} from './render.js'

export function renderCategory (array) {

    const inputs = document.querySelectorAll('.filter__menu > input[type = radio]')

    inputs.forEach(input => {
        
        input.addEventListener('change', () => {
            if(input.value === 'todos') {
                renderEntries(array)
                entriesSum(array) 
            } else {
                filterCategory(array, input.categoryID)
            }
        })

    });
}

function filterCategory (array, input) {

    const filtered = array.filter(entry => {
        
        if (input == entry.categoryID) {

            insertedValuesfiltered.push(filtered)
            console.log(insertedValuesfiltered)
            // renderEntries(insertedValuesfiltered)
            // entriesSum(insertedValuesfiltered)
        }
    })

}


// export const selectRender = (array, option) => {
//     const filteredElements = array.filter((client) => {
//       if(client.city.toLowerCase() === option.toLowerCase()) {
//         return client
//       }
//     })


// const handleSelect = (array) => {
//     const select = document.querySelector('select')
  
//     select.addEventListener('change', () => {
//       if(select.value === 'all') {
//         render(clients)
//       } else {
//         selectRender(array, select.value)
//       }
//     }) 
//   }


