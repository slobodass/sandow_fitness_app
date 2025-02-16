import "../index.css"
const trainingsCards = document.querySelectorAll('.trainings__item')
const trainingsModal = document.querySelector('.modal')
const modalCloseButton = document.querySelector('.modal__button-close')

const cardData = [
    {
        title: 'Йога',
        description: 'Йога - ..........'
    },
    {
        title: 'Кросс-тренинг',
        description: 'Йога - ..........'
    },
    {
        title: 'Здоровая спина',
        description: 'Йога - ..........'
    },
    {
        title: 'Dance hall',
        description: 'Йога - ..........'
    },
    {
        title: 'Zumba',
        description: 'Йога - ..........'
    },
    {
        title: 'Шпагат',
        description: 'Йога - ..........'
    },
    {
        title: 'Стретчинг',
        description: 'Йога - ..........'
    },
    {
        title: 'Табата',
        description: 'Йога - ..........'
    },
    {
        title: 'TRX',
        description: 'Йога - ..........'
    },
]
const modalTitle = document.querySelector('.modal_title')
const modalText = document.querySelector('.modal_text')


trainingsCards.forEach((card, index) => {
    card.addEventListener('click', () => {
        modalTitle.textContent = cardData[index].title
        modalText.textContent = cardData[index].description

        trainingsModal.classList.add('modal_active')
    })
})

// крестик закрывает окно
modalCloseButton.addEventListener('click', () => {
    trainingsModal.classList.remove('modal_active')
})

trainingsModal.addEventListener('click', (event) => {
    if (event.target === trainingsModal) {
        trainingsModal.classList.remove('modal_active')
    }
})



