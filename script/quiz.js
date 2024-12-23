const forms = document.querySelectorAll('.form_quiz') 
let currentFormIndex = 0;
let sumPoint = 0;
let procentPoint = 0;

window.addEventListener('load', () => {
    document.body.classList.add('loaded')
    forms[currentFormIndex].classList.add('active')
})

function showForm(index) {
    if(index < forms.length) {
        forms[currentFormIndex].classList.remove('active');
        forms[currentFormIndex].style.display= 'none';

        currentFormIndex = index;
        forms[currentFormIndex].classList.add('active');
        forms[currentFormIndex].style.display= 'flex';
    }
    if(index + 1 === forms.length) {
        procentPoint = parseFloat((sumPoint * 100 / 10).toFixed(2));
        document.querySelector('.score').textContent = `${procentPoint} %`;
        document.querySelector('.score-text').textContent = getResultText(procentPoint);
    }
}

function sumResultPoint(form) {
    const selectedRadio = form.querySelector('input[name="custom_radio"]:checked');
    const errorMessage = form.querySelector('.custom-radio-error');

    if(selectedRadio) {
        sumPoint += Number(selectedRadio.value);
        errorMessage.style.opacity = 0;
        return true;
    }
    else {
        errorMessage.style.opacity = 1;
        return false;
    }
}

function getResultText(procent) {
    if (procent <= 35) {
        document.querySelector('.score').style.color = 'red'
        return 'You are a beginner in cryptocurrency!';
    } else if (procent > 35 && procent < 75) {
        document.querySelector('.score').style.color = '#ffca28'
        return 'You know something about cryptocurrency!';
    } else {
        document.querySelector('.score').style.color = '#4CAF50'
        return 'You are almost an expert in cryptocurrency!';
    }
}


document.querySelectorAll('.next-button').forEach((button, index) => {
    button.addEventListener('mouseup', (event) => {
        event.preventDefault();
        const form = forms[currentFormIndex]
        if(sumResultPoint(form)) {
            showForm(index + 1);
        }
    })
})

document.querySelector('.retry-btn').addEventListener('mouseup', (event) => {
    event.preventDefault();
    window.location.href='mainPage.html#miningNow'
})




