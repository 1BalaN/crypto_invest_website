document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting) {
                    entry.target.classList.add('movingX')
                    observer.unobserve(entry.target)
                }
            })
        }, {threshold: 0.5}
    )
    observer.observe(document.querySelector('.criterion-eth'));
})

document.querySelector('.investments__learn').addEventListener('click', (event) => {
    event.preventDefault();
    window.open('https://www.binance.com/en/blog/fiat/3-ways-to-manage-your-crypto-portfolio-with-profit-and-loss-calculations-421499824684903556', '_blank')
})