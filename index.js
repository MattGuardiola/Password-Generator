document.addEventListener("DOMContentLoaded", function () {
    const passwordBox = document.getElementById("password-input");
    const paswordLengthAlert = document.getElementById("password-length-alert")
    const uppercaseLetterAlert = document.getElementById("password-uppercase-alert")
    const specialCharacterAlert = document.getElementById("password-special-character-alert")
    const spaceAlert = document.getElementById("password-space-alert")





    function handlePasswordLength() {
        const password = passwordBox.value;
        const minimumCharacters = 8;

        if(password.length >= minimumCharacters){
            paswordLengthAlert.classList.remove("alert-danger");
            paswordLengthAlert.classList.add("alert-success");
        } else {
            paswordLengthAlert.classList.remove("alert-success");
            paswordLengthAlert.classList.add("alert-danger")
        }
    }

    function handleUppercase() {
        const password = passwordBox.value;
        let doesContainUppercase = /[A-Z]/.test(password)

        if (doesContainUppercase === true) {
            uppercaseLetterAlert.classList.remove("alert-danger");
            uppercaseLetterAlert.classList.add("alert-success");
        } else {
            uppercaseLetterAlert.classList.remove("alert-success");
            uppercaseLetterAlert.classList.add("alert-danger")
        }
    }

    function handleSpecialCharacters() {
        const password = passwordBox.value;
        let doesContainSpecialCharacter = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password)

        if (doesContainSpecialCharacter === true) {
            specialCharacterAlert.classList.remove("alert-danger");
            specialCharacterAlert.classList.add("alert-success");
        } else {
            specialCharacterAlert.classList.remove("alert-success");
            specialCharacterAlert.classList.add("alert-danger")
        }
    }

    function handleSpaces() {
        const password = passwordBox.value;
        let doesContainSpaces = /[" "]/.test(password)

        if (doesContainSpaces !== true) {
            spaceAlert.classList.remove("alert-danger");
            spaceAlert.classList.add("alert-success");
        } else {
            spaceAlert.classList.remove("alert-success");
            spaceAlert.classList.add("alert-danger")
        }
    }




    passwordBox.addEventListener("input", handleSpaces)
    passwordBox.addEventListener("input", handlePasswordLength)
    passwordBox.addEventListener("input", handleUppercase)
    passwordBox.addEventListener("input", handleSpecialCharacters)
})