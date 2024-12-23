document.querySelector('.block__logo').addEventListener('mouseup', (event) => {
    location.reload();
})

document.querySelectorAll('#footer_links-notworks p').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        document.querySelector('.modal').style.display = 'flex'
        document.querySelector('.modal__block').classList.add('active-modal')
    })
})


