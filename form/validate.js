//by JS się odpalił po pełnym załadowaniu DOMu
window.onload = function () {
    // nie zadziała dla atrybutu novalidate
    var choose = document.getElementById("choose");
    console.log("reuired && pattern")
    console.log("willValidate: " + choose.willValidate);
    console.log("validationMessage: " + choose.validationMessage);
    console.log("validity:");
    console.log(choose.validity);
    choose.addEventListener("input", function (event) {
        console.log(choose.validity);
        if (choose.validity.valueMissing) {
            choose.setCustomValidity("Please enter fruit name");
        }
    })

    var emailForm = document.getElementById("emailForm");
    var email = document.getElementById("email");
    var error = document.querySelector('.error');


    email.addEventListener("input", function (event) {
        // Each time the user types something, we check if the
        // email field is valid.
        if (email.validity.valid) {
            // In case there is an error message visible, if the field
            // is valid, we remove the error message.
            error.innerHTML = ""; // Reset the content of the message
            error.className = "error"; // Reset the visual state of the message
        } else if (email.validity.valueMissing) {
            error.innerHTML = "Wpisz email";
            error.className = "error active";
        } else if (email.validity.typeMismatch) {
            error.innerHTML = "Niepoprawny format";
            error.className = "error active";
        }
    }, false);
    emailForm.addEventListener("submit", function (event) {
        // Each time the user tries to send the data, we check
        // if the email field is valid.
        console.log(email.value);
        if (!email.validity.valid) {

            // If the field is not valid, we display a custom
            // error message.
            error.innerHTML = "I expect an e-mail, darling!";
            error.className = "error active";
            // And we prevent the form from being sent by canceling the event
            event.preventDefault();
        }
    }, false);
}