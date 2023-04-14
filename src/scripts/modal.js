/* Desenvolva sua lógica aqui */

export function handleModalHeader () {
    const button = document.querySelector('.primary-button')
    const modal = document.querySelector('.modal__controller')

    button.addEventListener('click', () => {
        modal.showModal()
    })
}

export function handleModalMain () {
    const section = document.querySelector('.entries__list--empty')
    const modal = document.querySelector('.modal__controller')

    section.addEventListener('click', () => {
        modal.showModal()
    })
}

export function closeModal () {

    const buttons = document.querySelectorAll('.greylow-button')
    const modal = document.querySelector('.modal__controller')

    buttons.forEach(button => {

        button.addEventListener('click', (event) => {
            event.preventDefault()

            modal.close()
        })

    })
}