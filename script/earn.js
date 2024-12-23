const earnCalculator = document.forms.calculator;
const hashRateInput = earnCalculator.hash_rate;
const hashSec = earnCalculator.hashPerSecond;

let hashRate
let hashInSecond = hashSec.value
console.log(hashInSecond);

let ETH;
let USD;


hashRateInput.addEventListener('blur', () => {
    if (!Boolean(Number(hashRateInput.value))) {
      hashRateInput.value = 'Enter correct value';
      hashRateInput.style.color = 'red';
    } else {
      hashRate = hashRateInput.value;
      console.log(hashRate);
    }
});

hashRateInput.addEventListener('input', () => {
    hashRateInput.style.color = '#0d0d2b'; 
});

hashRateInput.addEventListener('click', () => {
    hashRateInput.value = '';
})

hashSec.addEventListener('change', () => {
    hashInSecond = hashSec.value;
    console.log(hashInSecond);
})

document.querySelector('.calculator__button').addEventListener('click', (event) => {
    event.preventDefault();
    if(!Boolean(Number(hashRateInput.value))) {
      document.querySelector('.crypto__number').textContent = 0;
      document.querySelector('.crypto__usd').textContent = 0;
    }
    switch (hashInSecond) {
      case 'H/s': hashRateToETHAndUSD(hashRate, 1); break;

      case 'kH/s': hashRateToETHAndUSD(hashRate, 1e3); break;

      case 'MH/s': hashRateToETHAndUSD(hashRate, 1e6); break;

      case 'GH/s': hashRateToETHAndUSD(hashRate, 1e9); break;

      case 'TH/s': hashRateToETHAndUSD(hashRate, 1e12); break;

      case 'PH/s': hashRateToETHAndUSD(hashRate, 1e15); break;
    
    }
})


function hashRateToETHAndUSD(hashRate, rateDegree) {

  ETH = Number((((hashRate * rateDegree) / (900 * 1e12)) * 2 * (86400 / 12)).toFixed(6));
  console.log(ETH);
  
  USD = Number((ETH * 3331).toFixed(4));
  console.log(USD);

  document.querySelector('.crypto__number').textContent = ETH;
  document.querySelector('.usd__number').textContent = USD;
}


