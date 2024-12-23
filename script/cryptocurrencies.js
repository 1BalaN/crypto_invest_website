document.querySelector('.coins').addEventListener('click', (event) => {
    // Если клик произошёл по .coins__box, ничего не делаем
    if (event.target.closest('.coins__box')) {
        return;
    }

    document.querySelectorAll('.coins__info').forEach(el => {
        el.classList.remove('activeCoin');
    });

    const targetCoin = event.target.closest('.coins__info');
    if (targetCoin) {
        targetCoin.classList.add('activeCoin');
    }
});


document.querySelectorAll('.coins__box').forEach(box => {
    box.addEventListener('click', (event) => {
        event.stopPropagation(); 
        window.open('https://www.binance.com/en', '_blank');
    });
});

