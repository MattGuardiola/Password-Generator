let romanNumeralsArray;
let containsRomanNumeralsAlert;

document.addEventListener("DOMContentLoaded", function (){

    let alertCreated = false
    let hasExicuted = false;
    const alertContainer = document.getElementById("alertContainer");
    const passwordBox = document.getElementById("password-input");


    function createNewRomanNumeralsAlert() {
        if (!alertCreated && allMainFunctions() && handleAddTo25()) {
            const successAlert = createAlert("Your Password must contain at least 3 roman numerals", "alert-danger", "containRomanNumerals");
            insertAlertBefore(successAlert, alertContainer.firstChild);
            alertCreated = true
            containsRomanNumeralsAlert = successAlert;
        }
    }

    function insertAlertBefore(newAlert, existingAlert) {
        if (!hasExicuted) {
            alertContainer.insertBefore(newAlert, existingAlert);
        }
        hasExicuted = true
    }



    document.addEventListener("input", createNewRomanNumeralsAlert)
    document.addEventListener("input", handleContainsRomanNumerals)
})



function handleContainsRomanNumerals () {
    let containsRomanNumeralsSuccess;
    const password = passwordBox.value
    const romanNumerals = ["X", "I", "V"]
    romanNumeralsArray = [];

    for (let i = 0; i < (password.length + 1); i++) {
        const char = password[i];
        if(romanNumerals.includes(char)) {
            romanNumeralsArray.push(char);
        }
    }

    if (romanNumeralsArray.length === 3) {
        containsRomanNumeralsSuccess = true
    } else {
        containsRomanNumeralsSuccess = false
    }

    classChange(containsRomanNumeralsSuccess, containsRomanNumeralsAlert)
    return containsRomanNumeralsSuccess
}
