let addTo25Alert;

document.addEventListener("DOMContentLoaded", function () {

    let addTo25AlertCreated = false
    let addTo25HasExicuted = false;
    const alertContainer = document.getElementById("alertContainer");
    const passwordBox = document.getElementById("password-input");


    function createAddTo25Alert() {
        if (!addTo25AlertCreated && allMainFunctions()) {
            const successAlert = createAlert("All Numbers within your password must add up to 25", "alert-danger", "addTo25");
            insertAlertBefore(successAlert, alertContainer.firstChild);
            addTo25AlertCreated = true
            addTo25Alert = successAlert;
        }
    }


    function insertAlertBefore(newAlert, existingAlert) {
        if (!addTo25HasExicuted) {
            alertContainer.insertBefore(newAlert, existingAlert);
        }
        addTo25HasExicuted = true
    }


    function deleteAlert() {
        if (!allMainFunctions()) {
            let alertStatus = {alertCreated: addTo25AlertCreated, alertExicuted: addTo25HasExicuted}
            removeAlert(addTo25Alert, addTo25AlertCreated, addTo25HasExicuted);
            addTo25AlertCreated = false;
            addTo25AlertCreated = alertStatus.alertCreated
            addTo25HasExicuted = alertStatus.alertExicuted
        }
    }

    passwordBox.addEventListener("input", createAddTo25Alert)
    passwordBox.addEventListener("input", handleAddTo25)
    passwordBox.addEventListener("input", deleteAlert)
})


function handleAddTo25() {
    let alertAddTo25Success
    const password = passwordBox.value
    const testNumbers = /\d/g;
    const digitsArray = password.match(testNumbers).map(Number);

    let sum = 0;

    for (let i = 0; i < digitsArray.length; i++) {
        sum += digitsArray[i]
    }

    if (sum === 25) {
        alertAddTo25Success = true;
    } else {
        alertAddTo25Success = false;
    }
    classChange(alertAddTo25Success, addTo25Alert)
    return alertAddTo25Success
}
