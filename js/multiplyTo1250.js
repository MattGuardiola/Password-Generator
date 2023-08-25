let multiplyTo35Alert;

document.addEventListener("DOMContentLoaded", function (){

    let multiplyTo35AlertCreated = false
    let multiplyTo35HasExecuted = false;
    const alertContainer = document.getElementById("alertContainer");

    function createMultiplyTo1250Alert() {
        if (!multiplyTo35AlertCreated && allMainFunctions() && handleAddTo25() && handleContainsRomanNumerals()) {
            const successAlert = createAlert("The roman numerals in your password must multiply to equal at least 1250", "alert-danger", "multiplyTo35");
            insertAlertBefore(successAlert, alertContainer.firstChild);
            multiplyTo35AlertCreated = true
            multiplyTo35Alert = successAlert;
        }
    }

    function insertAlertBefore(newAlert, existingAlert) {
        if (!multiplyTo35HasExecuted) {
            alertContainer.insertBefore(newAlert, existingAlert);
        }
        multiplyTo35HasExecuted = true
    }


    function deleteMultiplyTo35Alert() {
        if (!allMainFunctions() || !handleAddTo25() || !handleContainsRomanNumerals()) {
            let alertStatus = {alertCreated: multiplyTo35AlertCreated, alertExicuted: multiplyTo35HasExecuted}
            removeAlert(multiplyTo35Alert, alertStatus);
            multiplyTo35AlertCreated = alertStatus.alertCreated
            multiplyTo35HasExecuted = alertStatus.alertExicuted
        }
    }


    document.addEventListener("input", createMultiplyTo1250Alert)
    document.addEventListener("input", deleteMultiplyTo35Alert)
    document.addEventListener("input",handleMultiplyTo1250)

})


    function handleMultiplyTo1250(){
        let multiplyTo35Success
        let multiplesArray = []
        let i = 0;
        let x = 0;
        let result = 1;

        while (i < romanNumeralsArray.length) {
            if (romanNumeralsArray[i].includes("I")){
                multiplesArray.push(1)
            } else if (romanNumeralsArray[i].includes("V")){
                multiplesArray.push(5)
            } else if (romanNumeralsArray[i].includes("X")){
                multiplesArray.push(10)
            }
            i++
        }

        while (x < multiplesArray.length){
            result *= multiplesArray[x]
            x++
        }

        if(result > 1250){
            multiplyTo35Success = true
        } else {
            multiplyTo35Success = false
        }

        classChange(multiplyTo35Success, multiplyTo35Alert)
        return multiplyTo35Success
    }
