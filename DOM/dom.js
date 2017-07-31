//EventTarget
var inputText = document.getElementById('textForSpan');
var spanText = document.getElementById('spanToChange');
/*
 * Powyżej uzyskałem referencje do obiektów dziedziaczących po HTMLELement.
 * Każdy z nich implementuje również metody interface EventTarget.
 * */

inputText.addEventListener("input", function () {
    console.log(inputText.value);
    spanText.innerHTML = inputText.value;
});