let romanNumeralsArray;
let containsRomanNumeralsAlert;

document.addEventListener("DOMContentLoaded", function (){

    let containsRomanNumeralsAlertCreated = false
    let containsRomanNumeralsHasExicuted = false;
    const alertContainer = document.getElementById("alertContainer");

    function createNewRomanNumeralsAlert() {
        if (!containsRomanNumeralsAlertCreated && allMainFunctions() && handleAddTo25()) {
            const successAlert = createAlert("Your Password must contain at least 3 roman numerals", "alert-danger", "containRomanNumerals");
            insertAlertBefore(successAlert, alertContainer.firstChild);
            containsRomanNumeralsAlertCreated = true
            containsRomanNumeralsAlert = successAlert;
        }
    }

    function insertAlertBefore(newAlert, existingAlert) {
        if (!containsRomanNumeralsHasExicuted) {
            alertContainer.insertBefore(newAlert, existingAlert);
        }
        containsRomanNumeralsHasExicuted = true
    }


    function deleteAlert() {
        if (!allMainFunctions() || !handleAddTo25()) {
            let alertStatus = {alertCreated: containsRomanNumeralsAlertCreated, alertExicuted: containsRomanNumeralsHasExicuted}
            removeAlert(containsRomanNumeralsAlert, alertStatus);
            containsRomanNumeralsAlertCreated = alertStatus.alertCreated
            containsRomanNumeralsHasExicuted = alertStatus.alertExicuted
        }
    }





    document.addEventListener("input", createNewRomanNumeralsAlert)
    document.addEventListener("input", handleContainsRomanNumerals)
    passwordBox.addEventListener("input", deleteAlert)
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
