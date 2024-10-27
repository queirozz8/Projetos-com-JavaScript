let modalWrapper = document.getElementById('modal-wrapper')
let buttonOpenModal = document.querySelector('button')

document.addEventListener('keydown', function(event) {
    const isEscKey = event.key === 'Escape'
    
    if (isEscKey && !modalWrapper.classList.contains('invisible')) {
        modalWrapper.classList.add('invisible')
    }
})

buttonOpenModal.addEventListener('click', function() {
    modalWrapper.classList.remove('invisible')
})
