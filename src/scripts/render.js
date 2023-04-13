import {valuesCategory} from './valuesData.js'


export function renderEntries (array) {

    const entriesList = document.querySelector('.entries__list')
    entriesList.innerHTML = ''

    array.forEach((entry) => {
    const renderedEntry = createEntries(entry, valuesCategory)

    entriesList.appendChild(renderedEntry)
    })
} 

function createEntries (entry, category) {

        const container = document.createElement('li')
        const entryValue = document.createElement('div')
        const entryInfo = document.createElement('div')
        const entryType = document.createElement('span')
        const entryRemove = document.createElement('button')
    
        container.className = 'entry__container'
        container.id = entry.id

        entryValue.className = 'entry__value'
        entryValue.innerHTML = entry.value.toFixed(2)

        entryInfo.className = 'entry__info'

        entryType.className = 'entry__type'

        if (entry.categoryID === 0) {
            entryType.innerHTML = category[0]
        } else {
            entryType.innerHTML = category[1]
        }

        entryRemove.className = 'entry__remove'
        
        
        container.append(entryValue, entryInfo)
        entryInfo.append(entryType, entryRemove)

        return container
}

export function entriesSum (array) {
    const sumValue = document.querySelector('.summary__value')

    const sum = array.reduce((acc, entry) => {
        return acc + entry.value
    }, 0)

    sumValue.innerText = `R$ ${sum.toFixed(2)}`
}