const miningNowForm = document.forms.now;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

document.querySelector('.mininigNow__subscribe').addEventListener('click', (event) => {
    event.preventDefault(); 
    if((miningNowForm.email.value.trim() != '') && emailPattern.test(miningNowForm.email.value)) {
        document.querySelector('.subscribe').style.display = 'flex';
        document.querySelector('.subscribe__block').classList.add('active-modal');
        let emailName = miningNowForm.email.value.split('@')[0]
        document.querySelector('.subscribe__block-info').textContent = `${firstLetterUp(emailName)}, do you want to take the quiz and find out if you are ready for the Crypto World ?`
    }
    else {
        document.querySelector('.mininigNow__error').style.display='block'
    }
});

miningNowForm.email.addEventListener('focus', () => {
    miningNowForm.email.value = ''
    document.querySelector('.mininigNow__error').style.display='none'
})

function firstLetterUp(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
}


document.querySelector('#subNo').addEventListener('mouseup', () => {
    document.querySelector('.subscribe').style.display = 'none';
})
document.querySelector('#subYes').addEventListener('mouseup', () => {
    document.body.classList.add('fade-out');
    setTimeout(() => {
        window.location.href='quiz.html'
    }, 500);
})


