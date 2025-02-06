import "../index.css"
const trainingsCards = document.querySelectorAll('.trainings__item')
const trainingsModal = document.querySelector('.modal')
const modalCloseButton = document.querySelector('.modal__button-close')

trainingsCards.forEach((card) => {
    card.addEventListener('click', () => {
        trainingsModal.classList.add('modal_active')
    })
})

// крестик закрывает окно
modalCloseButton.addEventListener('click', () =>  {
    trainingsModal.classList.remove('modal_active')
})

trainingsModal.addEventListener('click', (event) => {
    if (event.target === trainingsModal) {
        trainingsModal.classList.remove('modal_active')
    }
})