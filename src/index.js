import { validateLogin, validateEmail, validatePassword } from 'vladkrs-validator';

function InputField(option) {
    this.inputAll = option.inputAll
    this.inputVal = option.inputVal
    this.inputInfo = option.inputInfo
    this.inputPattern = option.inputPattern
    this.maxLength = option.maxLength
    this.minLength = option.minLength

    this.inputAll = option.inputAll
    this.value = this.inputAll.value;
}
InputField.prototype.isEmty = function () {
    return this.value === "";
}

InputField.prototype.setVal = function (newVal) {
    this.inputAll.value = newVal;
    this.value = newVal
}

InputField.prototype.isPhone = function () {
    const phoneNum = /^((\+38)?||(38)?)([0-9-]{10})$/;
    return phoneNum.test(this.value);
}

// LOGIN
InputField.prototype.isValidLogin = function () {
    this.inputAll.addEventListener("change", () => {
        if (validateLogin(this.inputVal.value, this.inputPattern, this.minLength, this.maxLength)) {
            this.inputAll.classList.add("valid")
            this.inputAll.classList.remove("unvalid")
            this.inputInfo.innerHTML = `<p>Everything is fine</p><a href="https://github.com/VladislavKrs/library-validations">My repositories</a>`
        } else {
            this.inputAll.classList.add("unvalid")
            this.inputAll.classList.remove("valid")
            this.inputInfo.innerHTML = `<p>Everything is fine</p><a href="https://github.com/VladislavKrs/library-validations">My repositories</a>`
        }
        if (this.inputVal.value === "") {
            this.inputAll.classList.remove("unvalid")
            this.inputAll.classList.remove("valid")
            this.inputInfo.innerHTML = `<p>Please enter your login</p>`
        }
    });
}


// EMAIL
InputField.prototype.isValidEmail = function () {
    this.inputAll.addEventListener("change", () => {
        if (validateEmail(this.inputVal.value, this.inputPattern)) {
            this.inputAll.classList.add("valid")
            this.inputAll.classList.remove("unvalid")
            this.inputInfo.innerHTML = `<p>Email is eligible</p><a href="https://github.com/VladislavKrs/library-validations">My repositories</a>`
        } else {
            this.inputAll.classList.add("unvalid")
            this.inputAll.classList.remove("valid")
            this.inputInfo.innerHTML = `<p>Please enter by example index@gmail.com</p>`
        }
        if (this.inputVal.value === "") {
            this.inputAll.classList.remove("unvalid")
            this.inputAll.classList.remove("valid")
            this.inputInfo.innerHTML = `<p>Please enter your email</p>`
        }
    });
}

// PASSWORD
InputField.prototype.isValidPassword = function () {
    this.inputAll.addEventListener("change", () => {
        if (validatePassword(this.inputVal.value, this.inputPattern)) {
            this.inputAll.classList.add("valid")
            this.inputAll.classList.remove("unvalid")
            this.inputInfo.innerHTML = `<p>Thank you for the entered password</p><a href="https://github.com/VladislavKrs/library-validations">My repositories</a>`
        } else {
            this.inputAll.classList.add("unvalid")
            this.inputAll.classList.remove("valid")
            this.inputInfo.innerHTML = `<p>Must contain Latin + numbers</p>`
        }
        if (this.inputVal.value === "") {
            this.inputAll.classList.add("unvalid")
            this.inputAll.classList.remove("valid")
            this.inputInfo.innerHTML = `<p>Please enter your password</p>`
        }
    });
}

const mainLogin = new InputField({
    inputAll: document.querySelector('#login'),
    inputVal: document.getElementById('login'),
    inputInfo: document.getElementById('info_login'),
    inputPattern: /[a-zA-Z0-9]+/,
    minLength: 6,
    maxLength: 10
})

const mainEmail = new InputField({
    inputAll: document.querySelector('#email'),
    inputVal: document.getElementById('email'),
    inputInfo: document.getElementById('info_email'),
    inputPattern: /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
})

const mainPassword = new InputField({
    inputAll: document.querySelector('#password'),
    inputVal: document.getElementById('password'),
    inputInfo: document.getElementById('info_password'),
    inputPattern: /[a-zA-Z0-9]+/
})

mainLogin.isValidLogin()
mainEmail.isValidEmail()
mainPassword.isValidPassword()

// function validateForm() {
//     const loginValue = document.getElementById('login').value;
//     const emailValue = document.getElementById('email').value;
//     const passwordValue = document.getElementById('password').value;
//     const patternLogin = /[a-zA-Z0-9]+/;
//     const patternEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
//     const patternPassword = /^(?=.*\d)\w{3,20}$/m;
//     const minLength = 6;
//     const maxLength = 12;

//     if (!validateLogin(loginValue, patternLogin, minLength, maxLength)) {
//         return false;
//     }
//     if (!validateEmail(emailValue, patternEmail)) {
//         return false;
//     }
//     if (!validatePassword(passwordValue, patternPassword)) {
//         return false;
//     }
//     return true;
// }

// document.getElementById('btn').addEventListener('click', function (e) {
//     e.preventDefault()
//     if (validateForm()) {
//         console.log('ok')
//     }
// });

// ES6

// class InputField {
//     constructor(option) {
//         this.inputAll = option.inputAll
//         this.inputVal = option.inputVal
//         this.inputInfo = option.inputInfo
//         this.inputPattern = option.inputPattern
//         this.maxLength = option.maxLength
//         this.minLength = option.minLength
//         this.inputBecoming = option.inputBecoming

//         this.inputAll = option.inputAll
//         this.value = this.inputAll.value;
//     }

//     isEmty() {
//         return this.value === "";
//     }

//     setVal(newVal) {
//         this.inputAll.value = newVal;
//         this.value = newVal
//     }

//     isPhone() {
//         const phoneNum = /^((\+38)?||(38)?)([0-9-]{10})$/;
//         return phoneNum.test(this.value);
//     }

//     // LOGIN
//     validateLogin() {
//         this.inputAll.addEventListener("change", () => {
//             if (validateLogin(this.inputVal.value, this.inputPattern, this.minLength, this.maxLength)) {
//                 this.inputBecoming.classList.add("valid")
//                 this.inputBecoming.classList.remove("unvalid")
//                 this.inputInfo.innerHTML = `<p>Everything is fine</p><a href="https://github.com/VladislavKrs/library-validations">My repositories</a>`
//             } else {
//                 this.inputBecoming.classList.add("unvalid")
//                 this.inputBecoming.classList.remove("valid")
//                 this.inputInfo.innerHTML = `<p>Please enter 6 to 10 characters</p>`
//             }
//             if (this.inputVal.value === "") {
//                 this.inputBecoming.classList.remove("unvalid")
//                 this.inputBecoming.classList.remove("valid")
//                 this.inputInfo.innerHTML = `<p>Please enter your login</p>`
//             }
//         });
//     }


//     // EMAIL
//     validateEmail() {
//         this.inputAll.addEventListener("change", () => {
//             if (validateEmail(this.inputVal.value, this.inputPattern)) {
//                 this.inputBecoming.classList.add("valid")
//                 inputEthis.inputBecomingmail.classList.remove("unvalid")
//                 this.inputInfo.innerHTML = `<p>Email is eligible</p><a href="https://github.com/VladislavKrs/library-validations">My repositories</a>`
//             } else {
//                 this.inputBecoming.classList.add("unvalid")
//                 this.inputBecoming.classList.remove("valid")
//                 this.inputInfo.innerHTML = `<p>Please enter by example index@gmail.com</p>`
//             }
//             if (this.inputVal.value === "") {
//                 this.inputBecoming.classList.remove("unvalid")
//                 this.inputBecoming.classList.remove("valid")
//                 this.inputInfo.innerHTML = `<p>Please enter your email</p>`
//             }
//         });
//     }

//     // PASSWORD
//     validatePassword() {
//         this.inputAll.addEventListener("change", () => {
//             if (validatePassword(this.inputVal.value, this.inputPattern)) {
//                 this.inputBecoming.classList.add("valid")
//                 this.inputBecoming.classList.remove("unvalid")
//                 this.inputInfo.innerHTML = `<p>Thank you for the entered password</p><a href="https://github.com/VladislavKrs/library-validations">My repositories</a>`
//             } else {
//                 this.inputBecoming.classList.add("unvalid")
//                 this.inputBecoming.classList.remove("valid")
//                 this.inputInfo.innerHTML = `<p>Must contain Latin + numbers</p>`
//             }
//             if (this.inputVal.value === "") {
//                 this.inputBecoming.classList.add("unvalid")
//                 this.inputBecoming.classList.remove("valid")
//                 this.inputInfo.innerHTML = `<p>Please enter your password</p>`
//             }
//         });
//     }
// }
// const mainLogin = new InputField({
//     inputAll: document.querySelector('#login'),
//     inputVal: document.getElementById('login').value,
//     loginInfo: document.getElementById('info_login'),
//     inputPattern: /[a-zA-Z0-9]+/,
//     minLength: 6,
//     maxLength: 10
// })

// const mainEmail = new InputField({
//     inputAll: document.querySelector('#email'),
//     inputVal: document.getElementById('email').value,
//     loginInfo: document.getElementById('info_email'),
//     inputPattern: /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
// })

// const mainPassword = new InputField({
//     inputAll: document.querySelector('#password'),
//     inputVal: document.getElementById('password').value,
//     loginInfo: document.getElementById('info_password'),
//     inputPattern: /[a-zA-Z0-9]+/
// })

// mainLogin.validateLogin();
// mainEmail.validateEmail();
// mainPassword.validatePassword()

// function validateForm() {
//     const loginValue = document.getElementById('login').value;
//     const emailValue = document.getElementById('email').value;
//     const passwordValue = document.getElementById('password').value;
//     const patternLogin = /[a-zA-Z0-9]+/;
//     const patternEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
//     const patternPassword = /^(?=.*\d)\w{3,20}$/m;
//     const minLength = 6;
//     const maxLength = 12;

//     if (!validateLogin(loginValue, patternLogin, minLength, maxLength)) {
//         return false;
//     }
//     if (!validateEmail(emailValue, patternEmail)) {
//         return false;
//     }
//     if (!validatePassword(passwordValue, patternPassword)) {
//         return false;
//     }

//     return true;
// }

// document.getElementById('btn').addEventListener('click', function (e) {
//     e.preventDefault()
//     if (validateForm()) {
//         console.log('ok')
//     }
// });