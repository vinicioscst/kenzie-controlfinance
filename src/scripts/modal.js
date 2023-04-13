/* Desenvolva sua lógica aqui */

export function handleModal () {
    const button = document.querySelector('.primary-button')
    const modal = document.querySelector('.modal__controller')

    button.addEventListener('click', () => {
        modal.showModal()
    })
}

export function closeModal () {

    const buttons = document.querySelectorAll('.button__greylow')
    const modal = document.querySelector('.modal__controller')

    buttons.forEach(button => {

        button.addEventListener('click', (event) => {
            event.preventDefault()

            modal.close()
        })

    })
}