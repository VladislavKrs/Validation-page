// import { validateEmail, validateLogin, validatePassword } from 'vladkrs-validator';

function validateForm() {
    const loginValue = document.getElementById('login').value;
    const emailValue = document.getElementById('email').value;
    const passwordValue = document.getElementById('password').value;
    const patternLogin = /[a-zA-Z0-9]+/;
    const patternEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const patternPassword = /^(?=.*\d)\w{3,20}$/m;
    const minLength = 6;
    const maxLength = 12;

    if (!validateLogin(loginValue, patternLogin, minLength, maxLength)) {
        return false;
    }
    if (!validateEmail(emailValue, patternEmail)) {
        return false;
    }
    if (!validatePassword(passwordValue, patternPassword)) {
        return false;
    }

    return true;
}

document.getElementById('btn').addEventListener('click', function (e) {
    e.preventDefault()
    if (validateForm()) {
        console.log('ok')
    }
});
// LOGIN

const inputLogin = document.querySelector('#login');
inputLogin.addEventListener("change", () => {
    const loginVal = document.getElementById('login').value;
    const loginInfo = document.getElementById('info_login');
    const patternLogin = /[a-zA-Z0-9]+/;
    const minLength = 6;
    const maxLength = 10;

    if (validateLogin(loginVal, patternLogin, minLength, maxLength)) {
        inputLogin.classList.add("valid")
        inputLogin.classList.remove("unvalid")
        loginInfo.innerHTML = `<p>Everything is fine</p><a href="https://github.com/VladislavKrs/library-validations">My repositories</a>`
    } else {
        inputLogin.classList.add("unvalid")
        inputLogin.classList.remove("valid")
        loginInfo.innerHTML = `<p>Please enter 6 to 10 characters</p>`
    }
    if (loginVal === "") {
        inputLogin.classList.remove("unvalid")
        inputLogin.classList.remove("valid")
        loginInfo.innerHTML = `<p>Please enter your login</p>`
    }
});

// EMAIL
const inputEmail = document.querySelector('#email')
inputEmail.addEventListener("change", () => {
    const emailVal = document.getElementById('email').value;
    const emailInfo = document.getElementById('info_email');
    const patternEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (validateEmail(emailVal, patternEmail)) {
        inputEmail.classList.add("valid")
        inputEmail.classList.remove("unvalid")
        emailInfo.innerHTML = `<p>Email is eligible</p><a href="https://github.com/VladislavKrs/library-validations">My repositories</a>`
    } else {
        inputEmail.classList.add("unvalid")
        inputEmail.classList.remove("valid")
        emailInfo.innerHTML = `<p>Please enter by example index@gmail.com</p>`
    }
    if (emailVal === "") {
        inputEmail.classList.remove("unvalid")
        inputEmail.classList.remove("valid")
        emailInfo.innerHTML = `<p>Please enter your email</p>`
    }
});

// PASSWORD
const inputPassword = document.querySelector('#password')
inputPassword.addEventListener("change", () => {
    const passwordVal = document.getElementById('password').value;
    const passwordInfo = document.getElementById('info_password');
    const patternPassword = /[a-zA-Z0-9]+/;

    if (validatePassword(passwordVal, patternPassword)) {
        inputPassword.classList.add("valid")
        inputPassword.classList.remove("unvalid")
        passwordInfo.innerHTML = `<p>Thank you for the entered password</p><a href="https://github.com/VladislavKrs/library-validations">My repositories</a>`
    } else {
        inputPassword.classList.add("unvalid")
        inputPassword.classList.remove("valid")
        passwordInfo.innerHTML = `<p>Must contain Latin + numbers</p>`
    }
    if (passwordVal === "") {
        inputPassword.classList.add("unvalid")
        inputPassword.classList.remove("valid")
        passwordInfo.innerHTML = `<p>Please enter your password</p>`
    }
});




