const users = [
    {
        email: 'balancik@gmail.com',
        password: '1234567890'
    },
    {
        email: 'user@gmail.com',
        password: '1111'
    }
];

const login = document.forms.login;
const signUp = document.forms.signUp;


signUp.addEventListener('submit', (event) => {
    event.preventDefault(); 
    const email = signUp.email.value.trim();
    const password = signUp.password.value.trim();

    const createdUser = { email, password };

    const userExists = users.some(user => user.email === createdUser.email);

    if (!userExists) {
        users.push(createdUser); 
        alert(`${createdUser.email} has been created, Welcome !`)
        window.location.href = 'mainPage.html';
    } else {
        alert('This user already exists!'); 
        signUp.email.value = ''; 
        signUp.password.value = '';
    }
});

document.querySelector('#up').addEventListener('click', (event) => {
    event.preventDefault;
    document.querySelector('#log_in').style.display = 'none'
    document.querySelector('#sign_up').style.display = 'block'
})

document.querySelector('#in').addEventListener('click', (event) => {
    event.preventDefault;
    document.querySelector('#sign_up').style.display = 'none'
    document.querySelector('#log_in').style.display = 'block'
})

login.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = login.email.value.trim();
    const password = login.password.value.trim();

    const currentUser = {email, password}
    const userExists = users.find(user => user.email === currentUser.email)
    if(userExists) {
        if(currentUser.password === userExists.password) {
            alert(`Welcome ${currentUser.email}`)
            window.location.href = 'mainPage.html';
        }
        else {
            alert ('Wrong password !')
            login.password.value = ''
        }
    }
    else {
        alert(`User ${currentUser.email} doesn't exist !`)
        login.email.value = ''; 
        login.password.value = '';
    }

})


