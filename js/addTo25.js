document.addEventListener("DOMContentLoaded", function () {

    const alertContainer = document.getElementById("alertContainer");
    const passwordBox = document.getElementById("password-input");

    function createNewAlert() {
        if (handleSpaces() === true && handlePasswordLength() === true && handleUppercase() === true && handleSpecialCharacters() === true) {

            const successAlert = createAlert("All Numbers within your password must add up to 25", "alert-danger");
            insertAlertBefore(successAlert, alertContainer.firstChild);
        } else {
            removeAlert()
        }
    }

    function createAlert(message, className) {
        const alert = document.createElement("div");
        alert.classList.add("alert", className);
        alert.textContent = message;
        alert.id = "addTo25"
        return alert;
    }

    function insertAlertBefore(newAlert, existingAlert) {
        const parent = alertContainer;
        parent.insertBefore(newAlert, existingAlert);
    }

    function removeAlert() {
        document.getElementById("addTo25").remove()
    }



    passwordBox.addEventListener("input", createNewAlert)
})