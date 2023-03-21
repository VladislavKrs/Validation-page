function validate() {

    // LOGIN
    const loginVal = document.getElementById('login').value;
    const loginInfo = document.getElementById('info_login');
    const inputLogin = document.querySelector('#login')
    const patternLogin = /[a-zA-Z0-9]+/;
    const minLength = 6;
    const maxLength = 10;

    if (validateLogin(loginVal, patternLogin, minLength, maxLength)) {
        inputLogin.classList.add("valid")
        inputLogin.classList.remove("unvalid")
        loginInfo.innerHTML = `<p>Everything is fine</p>`
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

    // EMAIL
    const emailVal = document.getElementById('email').value;
    const emailInfo = document.getElementById('info_email');
    const inputEmail = document.querySelector('#email')
    const patternEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (validateLogin(emailVal, patternEmail)) {
        inputEmail.classList.add("valid")
        inputEmail.classList.remove("unvalid")
        emailInfo.innerHTML = `<p>Email is eligible</p>`
    } else {
        inputEmail.classList.add("unvalid")
        inputEmail.classList.remove("valid")
        emailInfo.innerHTML = `<p>Please enter by example index@gmail.com</p>`
    }
    if (loginVal === "") {
        inputEmail.classList.remove("unvalid")
        inputEmail.classList.remove("valid")
        emailInfo.innerHTML = `<p>Please enter your email</p>`
    }

    // PASSWORD
    const passwordVal = document.getElementById('password').value;
    const passwordInfo = document.getElementById('info_password');
    const inputPassword = document.querySelector('#password')
    const patternPassword = /[a-zA-Z0-9]+/;

    if (validateLogin(passwordVal, patternPassword)) {
        inputPassword.classList.add("valid")
        inputPassword.classList.remove("unvalid")
        passwordInfo.innerHTML = `<p>Thank you for the entered password</p>`
    } else {
        inputPassword.classList.add("unvalid")
        inputPassword.classList.remove("valid")
        passwordInfo.innerHTML = `<p>Must contain Latin + numbers</p>`
    }
    if (loginVal === "") {
        inputPassword.classList.add("unvalid")
        inputPassword.classList.remove("valid")
        passwordInfo.innerHTML = `<p>Please enter your password</p>`
    }
}



