document.addEventListener("DOMContentLoaded", function(){


    let beatSimonAlertCreated = false
    let beatSimonHasExicuted = false;
    const alertContainer = document.getElementById("alertContainer");

    function createBeatSimonAlert() {
        const alertHTML = `
        <div> Your password must include the amount of turns it takes you to beat Simon</div>
    
        <div class="container" style="margin-left: 15%">
            <div class="row">
                <div id="green" class="btn green" style="margin: 5px; height: 80px; width: 80px; border: 3px solid black; border-radius: 20%; background-color: green;"></div>
                <div id="red" class="btn red" style="margin: 5px; height: 80px; width: 80px; border: 3px solid black; border-radius: 20%; background-color: red;"></div>
            </div>
            <div class="row">
                <div id="yellow" class="btn yellow" style="margin: 5px; height: 80px; width: 80px; border: 3px solid black; border-radius: 20%; background-color: yellow;"></div>
                <div id="blue" class="btn blue" style="margin: 5px; height: 80px; width: 80px; border: 3px solid black; border-radius: 20%; background-color: blue;"></div>
            </div>
        </div>
        
        <button id="start-game">Start Game</button>`;
        const successAlertFragment = document.createRange().createContextualFragment(alertHTML);
        if (!beatSimonAlertCreated && allMainFunctions()) {
            const successAlert = createComplexAlert(successAlertFragment, "alert-danger", "beatSimon");
            insertAlertBefore(successAlert, alertContainer.firstChild);
            beatSimonAlertCreated = true
            containsRomanNumeralsAlert = successAlert;
        }
    }

    function insertAlertBefore(newAlert, existingAlert) {
        if (!beatSimonHasExicuted) {
            alertContainer.insertBefore(newAlert, existingAlert);
        }
        beatSimonHasExicuted = true
    }

    // //after player hits play
    // other functions will be called
    // and game will start
    // a random number of turns will be picked each time
    // the player will them input that amount of turns into the password
    // this may affect the "add to 25" rule and the p[layer will have to change]














    document.addEventListener("input",createBeatSimonAlert)
})