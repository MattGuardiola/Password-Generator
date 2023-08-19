function createAlert(message, className, id) {
    const alert = document.createElement("div");
    alert.classList.add("alert", className);
    alert.textContent = message;
    alert.id = id;
    return alert;
}


