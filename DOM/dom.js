console.log("Parser download dom .js and run it");
//EventTarget
var inputText = document.getElementById('textForSpan');
var spanText = document.getElementById('spanToChange');
/*
 * Powyżej uzyskałem referencje do obiektów dziedziaczących po HTMLELement.
 * Każdy z nich implementuje również metody interface EventTarget.
 * */

inputText.addEventListener("input", function () {
    spanText.innerHTML = inputText.value;
});