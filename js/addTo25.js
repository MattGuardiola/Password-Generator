document.addEventListener("DOMContentLoaded", function () {

    let alertCreated = false
    let hasExicuted = false;
    let addTo25Alert;
    const alertContainer = document.getElementById("alertContainer");
    const passwordBox = document.getElementById("password-input");


    function createNewAlert() {
            if (!alertCreated && allMainFunctions()) {
                const successAlert = createAlert("All Numbers within your password must add up to 25", "alert-danger");
                insertAlertBefore(successAlert, alertContainer.firstChild);
                alertCreated = true
                addTo25Alert = successAlert;
            }
        }


    function createAlert(message, className) {
        const alert = document.createElement("div");
        alert.classList.add("alert", className);
        alert.textContent = message;
        alert.id = "addTo25"
        addTo25Alert = alert
        return alert;
    }


    function insertAlertBefore(newAlert, existingAlert) {
        if (!hasExicuted) {
            alertContainer.insertBefore(newAlert, existingAlert);
        }
        hasExicuted = true
    }

    function removeAlert() {
        if (addTo25Alert) {
            addTo25Alert.remove();
            alertCreated = false;
            hasExicuted = false;
        }
    }


    function handleAddTo25(){
        const password = passwordBox.value
        const testNumbers = /\d/g;
        const digitsArray = password.match(testNumbers).map(Number);

        let sum = 0;

        for(let i = 0; i < digitsArray.length; i++) {
            sum += digitsArray[i]
        }

        if(sum === 25 ) {
            addTo25Alert.classList.remove("alert-danger");
            addTo25Alert.classList.add("alert-success");
            return true;
        } else {
            addTo25Alert.classList.remove("alert-success");
            addTo25Alert.classList.add("alert-danger")
            return false;
        }
    }


    function deleteAlert() {
        if (!allMainFunctions()) {
            removeAlert();
            alertCreated = false;
        }
    }


    passwordBox.addEventListener("input", createNewAlert)
    passwordBox.addEventListener("input", handleAddTo25)
    passwordBox.addEventListener("input", deleteAlert)
})




