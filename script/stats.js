document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.information__value');

    // Функция easing (замедление к концу анимации)
    const easeOutExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target.querySelector('.number');
                    const targetValue = +entry.target.getAttribute('data-value');
                    const duration = 2000; 

                    const updateCounter = () => {
                        const startTime = performance.now(); // Начальное время

                        const animate = (currentTime) => {
                            const elapsedTime = currentTime - startTime; // Прошло времени
                            const progress = Math.min(elapsedTime / duration, 1); // Прогресс от 0 до 1
                            const easedProgress = easeOutExpo(progress); // Прогресс с замедлением

                            counter.textContent = Math.floor(easedProgress * targetValue); // Устанавливаем новое значение

                            if (progress < 1) {
                                requestAnimationFrame(animate); // Продолжаем анимацию
                            } else {
                                counter.textContent = targetValue; // Устанавливаем финальное значение
                            }
                        };

                        requestAnimationFrame(animate);
                    };

                    updateCounter();
                    observer.unobserve(entry.target); // Останавливаем наблюдение
                }
            });
        },
        { threshold: 0.75 } // Срабатывает, когда элемент виден на 75%
    );

    counters.forEach(counter => observer.observe(counter)); // Подключаем наблюдатель
});
