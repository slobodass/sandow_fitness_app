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

const slider = document.querySelector('.trainings__list')
const prevBtn = document.querySelector('.rigth-button')
const nextBtn = document.querySelector('.rigth-button')
// prevBtn.textContent = '←'
// nextBtn.textContent = '→'
// prevBtn.classList.add('slider-btn', 'prev')
// nextBtn.classList.add('slider-btn', 'next')
// slider.parentElement.appendChild(prevBtn)
// slider.parentElement.appendChild(nextBtn)

const scrollAmount = slider.children[0]. offsetWidth + 20;

nextBtn.addEventListener('click', () => {
    slider.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    })
})

prevBtn.addEventListener('click', () => {
    slider.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
    })
})