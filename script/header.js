window.addEventListener('load', () => {
    document.body.classList.add('loaded')
})

document.querySelector('.navigation__logo').addEventListener('click', (event) => {
    location.reload()
})


document.querySelectorAll('.navigation__auth button').forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault()
        window.location.href = 'auth.html'
    })
})