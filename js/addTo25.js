let addTo25Alert;

document.addEventListener("DOMContentLoaded", function () {

    let alertCreated = false
    let addTo25HasExicuted = false;
    const alertContainer = document.getElementById("alertContainer");
    const passwordBox = document.getElementById("password-input");


    function createAddTo25Alert() {
        if (!alertCreated && allMainFunctions()) {
            const successAlert = createAlert("All Numbers within your password must add up to 25", "alert-danger", "addTo25");
            insertAlertBefore(successAlert, alertContainer.firstChild);
            alertCreated = true
            addTo25Alert = successAlert;
        }
    }


    function insertAlertBefore(newAlert, existingAlert) {
        if (!addTo25HasExicuted) {
            alertContainer.insertBefore(newAlert, existingAlert);
        }
        addTo25HasExicuted = true
    }

    function removeAlert(deletedAlert) {
        if (deletedAlert) {
            deletedAlert.remove();
            alertCreated = false;
            addTo25HasExicuted = false;
        }
    }


    function deleteAlert() {
        if (!allMainFunctions()) {
            removeAlert(addTo25Alert);
            alertCreated = false;
        }
    }


    passwordBox.addEventListener("input", createAddTo25Alert)
    passwordBox.addEventListener("input", handleAddTo25)
    passwordBox.addEventListener("input", deleteAlert)
})


function handleAddTo25() {
    const password = passwordBox.value
    const testNumbers = /\d/g;
    const digitsArray = password.match(testNumbers).map(Number);

    let sum = 0;

    for (let i = 0; i < digitsArray.length; i++) {
        sum += digitsArray[i]
    }

    if (sum === 25) {
        addTo25Alert.classList.remove("alert-danger");
        addTo25Alert.classList.add("alert-success");
        return true;
    } else {
        addTo25Alert.classList.remove("alert-success");
        addTo25Alert.classList.add("alert-danger")
        return false;
    }
}
