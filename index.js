document.addEventListener("DOMContentLoaded", function () {
    const passwordBox = document.getElementById("password-input");
    const paswordLengthAlert = document.getElementById("password-length-alert")
    const uppercaseLetterAlert = document.getElementById("password-uppercase-alert")





    function handlePasswordLength() {
        const password = passwordBox.value;
        const minimumCharactors = 8;

        if(password.length >= minimumCharactors){
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








    passwordBox.addEventListener("input", handlePasswordLength)
    passwordBox.addEventListener("input", handleUppercase)
})