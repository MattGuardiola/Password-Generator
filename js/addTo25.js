

document.addEventListener("DOMContentLoaded", function () {

    let hasExicuted = false;
    const alertContainer = document.getElementById("alertContainer");
    const passwordBox = document.getElementById("password-input");


    function createNewAlert() {
        if (handleSpaces() === true && handlePasswordLength() === true && handleUppercase() === true && handleSpecialCharacters() === true && handleNumber() === true) {

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

    const addTo25Alert = document.getElementById("addTo25")
    function insertAlertBefore(newAlert, existingAlert) {

        if (!hasExicuted) {
            const parent = alertContainer;
            parent.insertBefore(newAlert, existingAlert);
        }
        hasExicuted = true
    }

    function removeAlert() {
        document.getElementById("addTo25").remove()
        hasExicuted = false
    }


    function handleAddTo25(){
        const password = passwordBox.value
        const testNumbers = /\d/g;
        const digitsArray = password.match(testNumbers).map(Number);

        let sum = 0;

        for(let i = 0; i < digitsArray.length; i++) {
            sum += digitsArray[i]
        }
        console.log(addTo25Alert)

        if(sum === 25) {
            addTo25Alert.classList.remove("alert-danger");
            addTo25Alert.classList.add("alert-success");
            return true;
        } else {
            addTo25Alert.classList.remove("alert-success");
            addTo25Alert.classList.add("alert-danger")
            return false;
        }
    }



    passwordBox.addEventListener("input", createNewAlert)
    // passwordBox.addEventListener("input", handleAddTo25)
})