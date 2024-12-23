document.addEventListener('DOMContentLoaded', () => {
  const paths = document.querySelectorAll('.graphic__svg path');

  // Проверяем, есть ли пути
  if (paths.length > 0) {
      paths.forEach((path) => {
          const pathLength = path.getTotalLength();
          path.style.strokeDasharray = pathLength;
          path.style.strokeDashoffset = pathLength;

          // Создаём наблюдатель для каждого пути
          const observer = new IntersectionObserver(
              (entries) => {
                  entries.forEach((entry) => {
                      if (entry.isIntersecting) {
                          path.style.animationPlayState = 'running'; // Запустить анимацию
                          observer.unobserve(entry.target); // Остановить наблюдение за этим элементом
                      }
                  });
              },
              { threshold: 0.5 } // Срабатывает, если 50% элемента видны
          );

          observer.observe(path); // Наблюдаем за текущим путем
      });
  } else {
      console.error('Paths not found in SVG.');
  }
});


const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    });
  },
  {threshold: 0.5}
);

document.querySelectorAll('.animated').forEach((el) => observer.observe(el));


document.querySelector('.invest__btn').addEventListener('click', (event) => {
  event.preventDefault();
  window.open('https://medium.com/@GlobalEconomy/how-to-invest-smart-in-crypto-770dd846a9f1', '_blank')
})

document.querySelector('.detstats__learn').addEventListener('click', (event) => {
  event.preventDefault();
  window.open('https://ru.tradingview.com/chart/?symbol=BINANCE%3ABTCUSDT', '_blank');
})


document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              const svgRects = document.querySelectorAll('.svg-statistic rect');
              const animationPromises = [];

              svgRects.forEach((rect, index) => {
                  const animationDelay = index * 100; // Задержка для каждого прямоугольника

                  // Добавляем Promise для отслеживания завершения анимации
                  const animationPromise = new Promise((resolve) => {
                      setTimeout(() => {
                          rect.style.opacity = "1";
                          rect.style.transform = "scaleY(1)";
                          resolve(); // Разрешаем Promise после завершения анимации
                      }, animationDelay);
                  });

                  animationPromises.push(animationPromise); // Сохраняем Promise
              });

              // После того как все анимации завершатся
              Promise.all(animationPromises).then(() => {
                  // Применяем стили к .optimal-course
                  document.querySelector('.optimal-course').style.cssText = `
                      width: 42px;
                      height: 20px;
                      background: #42ffff;
                      text-align: center;
                      border-radius: 16px;
                      color: #fff;
                      font-weight: 500;
                      font-size: 10px;
                      opacity: 1;
                  `;
                  document.querySelector('.svg-statistic').style.borderTop = '1px dashed #6edcb5';
              });

              observer.disconnect(); // Останавливаем наблюдение
          }
      });
  }, { threshold: 0.5 });

  const chart = document.querySelector('.chart-container');
  observer.observe(chart);
});


const panelBtn = document.querySelectorAll('.panelbtn');
const gotItBtn = document.querySelector('.modal__button');

panelBtn.forEach((button) => {
  button.addEventListener('mouseup', (e) => {
    e.preventDefault();
    document.querySelector('.modal').style.display = 'flex'
    document.querySelector('.modal__block').classList.add('active-modal')
  })
})

gotItBtn.addEventListener('click', () => {
  document.querySelector('.modal').style.display = 'none'
})








