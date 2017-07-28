//by JS się odpalił po pełnym załadowaniu DOMu
window.onload = function () {
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
}