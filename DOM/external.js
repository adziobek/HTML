console.log("Parser download external .js and run it");
document.write("<p>This is from external .js</p>");

window.onload = function () {
    changeptext("window.onload after DOM was created");
};
changeptext("while DOM is created and html is parsed");
function changeptext(newtext) {
    var ptext = document.getElementById("ptext");
    ptext.innerHTML = newtext;
}