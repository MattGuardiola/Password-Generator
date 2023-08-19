document.addEventListener("DOMContentLoaded", function (){

    let alertCreated = false
    let hasExicuted = false;
    let addTo25Alert;
    const alertContainer = document.getElementById("alertContainer");
    const passwordBox = document.getElementById("password-input");


    function createNewRomanNumeralsAlert() {
        if (!alertCreated && allMainFunctions() && handleAddTo25()) {
            const successAlert = createAlert("Your Password must contain at least 3 roman numerals", "alert-danger", "containRomanNumerals");
            insertAlertBefore(successAlert, alertContainer.firstChild);
            alertCreated = true
            addTo25Alert = successAlert;
        }
    }

    function insertAlertBefore(newAlert, existingAlert) {
        if (!hasExicuted) {
            alertContainer.insertBefore(newAlert, existingAlert);
        }
        hasExicuted = true
    }



    document.addEventListener("input", createNewRomanNumeralsAlert)
})
