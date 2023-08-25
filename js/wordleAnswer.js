let wordleAnswerAlert;

document.addEventListener("DOMContentLoaded", function(){
    let wordleAnswerAlertCreated = false
    let wordleAnswerHasExecuted = false;
    const alertContainer = document.getElementById("alertContainer");

    function createWordleAnswerAlert() {
        if (!wordleAnswerAlertCreated && allMainFunctions() && handleAddTo25() && handleContainsRomanNumerals() && handleMultiplyTo1250()) {
            const successAlert = createAlert("Your password must contain today's Wordle answer", "alert-danger", "wordleAnswer");
            insertAlertBefore(successAlert, alertContainer.firstChild);
            wordleAnswerAlertCreated = true
            wordleAnswerAlert = successAlert;
        }
    }

    function insertAlertBefore(newAlert, existingAlert) {
        if (!wordleAnswerHasExecuted) {
            alertContainer.insertBefore(newAlert, existingAlert);
        }
        wordleAnswerHasExecuted = true
    }

    function deleteWordleAnswerAlert() {
        if (!allMainFunctions() || !handleAddTo25() || !handleContainsRomanNumerals() || !handleMultiplyTo1250()) {
            let alertStatus = {alertCreated: wordleAnswerAlertCreated, alertExicuted: wordleAnswerHasExecuted}
            removeAlert(wordleAnswerAlert, alertStatus);
            wordleAnswerAlertCreated = alertStatus.alertCreated
            wordleAnswerHasExecuted = alertStatus.alertExicuted
        }
    }


    document.addEventListener("input",createWordleAnswerAlert)
    document.addEventListener("input", deleteWordleAnswerAlert)
    document.addEventListener("input", handlewordleAnswer)
})


async function handlewordleAnswer(){
    let wordleAnswerSuccess;
    let password = passwordBox.value;
    const result = await playWordle()

    if(password.toLowerCase().includes(result.toLowerCase())){
        wordleAnswerSuccess = true;
    } else {
        wordleAnswerSuccess = false
    }
    classChange(wordleAnswerSuccess, wordleAnswerAlert)
    return wordleAnswerSuccess
}


async function playWordle() {
    const url = 'https://wordle-answers-solutions.p.rapidapi.com/today';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': WORDLE_API_KEY,
            'X-RapidAPI-Host': 'wordle-answers-solutions.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        let answer = result.substring(10,15);
        return answer
    } catch (error) {
        console.error(error);
    }
}

document.addEventListener("input",playWordle)