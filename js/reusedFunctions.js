
function createAlert(message, className, id) {
    const alert = document.createElement("div");
    alert.classList.add("alert", className);
    alert.textContent = message;
    alert.id = id;
    return alert;
}

function createComplexAlert(content, className, id) {
    const alert = document.createElement("div");
    alert.classList.add("alert", className);
    alert.appendChild(content)
    alert.id = id;
    return alert;
}



function classChange (testCase, specificAlert) {
    if (testCase === true) {
        specificAlert.classList.remove("alert-danger");
        specificAlert.classList.add("alert-success");
        return true;
    } else {
        specificAlert.classList.remove("alert-success");
        specificAlert.classList.add("alert-danger")
        return false;
    }
}





function removeAlert(deletedAlert, alertObject) {
    if (deletedAlert) {
        deletedAlert.remove();
        alertObject.alertCreated = false;
        alertObject.alertExicuted = false;
    }
}