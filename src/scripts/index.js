/* Desenvolva sua lógica aqui */
import {handleModalHeader, handleModalMain, closeModal} from './modal.js'
import {renderEntries, entriesSum, renderCategory} from './render.js'
import {insertedValues} from './valuesData.js'
import {registerValue} from './register.js'


export const handleCategory = (array) => {
    
    const sectionEmptyListText = document.querySelector('.entries__list--empty > h3')
    const filterButtons = document.querySelectorAll('.filter__menu > input')
    
    filterButtons.forEach(filterButton => {

        filterButton.addEventListener('change', () => {

            if (filterButton.value === 'all') {
                sectionEmptyListText.innerText = 'Nenhum valor registrado'
                renderEntries(array)
                entriesSum(array)
            } else if (filterButton.value === '0') {
                sectionEmptyListText.innerText = 'Nenhum valor registrado na categoria Entrada'
                renderCategory(array, filterButton.value)
            } else if (filterButton.value === '1') {
                sectionEmptyListText.innerText = 'Nenhum valor registrado na categoria Saída'
                renderCategory(array, filterButton.value)
            }

        })

    })
}

export const handleDeleteEntry = (array) => {
    
    const sectionEmptyList = document.querySelector('.entries__list--empty')
    const buttons = document.querySelectorAll('.entry__info > .entry__remove')
  
    buttons.forEach(button => {
      button.addEventListener('click', (event) => {

        const buttonDatasetId = event.target.dataset.clientId
  
        const findEntryIndex = array.findIndex(entry => entry.id === buttonDatasetId)
        const removedItem = array.splice(findEntryIndex,1)
  

        renderEntries(array)
        entriesSum(array)

        if (array.length < 1) {
            sectionEmptyList.style.display = 'flex'
          }

      })
    })
  }

  
renderEntries(insertedValues)
entriesSum(insertedValues)
handleModalHeader()
handleModalMain()
closeModal()
registerValue(insertedValues)
handleCategory(insertedValues)