document.querySelectorAll('.sales span').forEach(span => {
    span.addEventListener('click', () => {
        document.querySelectorAll('.sales span').forEach(el => {
            el.classList.remove('active')
        })
        span.classList.add('active')
    })
})

document.getElementById('try4free').addEventListener('click', (event) => {
    event.preventDefault()
    window.open('https://www.bybit.com/en/invite/', '_blank')
})