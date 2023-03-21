function validateLogin(loginVal, pattern, minLength, maxLength) {
    if (loginVal.length <= minLength || loginVal.length >= maxLength) {
        return false;
    } else if (!loginVal.match(pattern) === true) {
        return false;
    } else {
        return true;
    }
}

function validateEmail(emailVal, pattern) {
    if (emailVal.match(pattern)) {
        return true
    } else {
        return false
    }
}

function validatePassword(passwordVal, pattern) {
    if (pattern.test(passwordVal)) {
        return true;
    } else {
        return false;
    }
}