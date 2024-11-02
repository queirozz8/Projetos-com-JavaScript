function openModal() {
    document.querySelector('.modal-wrapper').classList.remove('invisible')

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && !document.querySelector('.modal-wrapper').classList.contains('invisible')) {
            document.querySelector('.modal-wrapper').classList.add('invisible')
        }
    })
}
