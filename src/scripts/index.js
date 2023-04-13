/* Desenvolva sua lógica aqui */
import {handleModal, closeModal} from './modal.js'
import {renderEntries, entriesSum} from './render.js'
import {insertedValues} from './valuesData.js'
import {renderCategory} from './filter.js'
import {registerValue} from './register.js'


renderEntries(insertedValues)
entriesSum(insertedValues)
renderCategory(insertedValues)
handleModal()
closeModal()
registerValue(insertedValues)