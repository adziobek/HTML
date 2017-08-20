window.onload = function () {
    /*Rejestruje w onload customListenera by nie dodawać listenera
     * za każdym razem gdy wystąpi zdarzenie i zostanie wywołana, np.
     * metoda onclick()
     * */
    var customButton = document.getElementById("customButton");
    var customDiv = document.getElementById("customDiv");

    customButton.addEventListener('customClickEvent', function (event) {
        console.log("Event type=[" + event.type + "] handling by custom button");
        console.log(event);
    }, false);

    customDiv.addEventListener('customClickEvent', function (event) {
        console.log("Event type=[" + event.type + "] handling by custom pink div");
    }, false);

    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    var div3 = document.getElementById("div3");

    div1.addEventListener("click", function (event) {
        console.log("div1 handler");
    });

    div2.addEventListener("click", function (event) {
        console.log("div2 handler");
    }, true);

    div3.addEventListener("click", function (event) {
        console.log("div3 handler");
    });
};

//Obsługiwanie domyślenego zdarzenia 'click'
function handleButtonClick(event) {
    console.log("<>< <>< <><");
    console.log("Event type=[" + event.type + "] handling by button");
}

function handleYellowDivClick(event) {
    console.log("Event type=[" + event.type + "] handling by yellow div");
    console.log(event);
}

function handlePinkDivClick(event) {
    console.log("Event type=[" + event.type + "] handling by pink div");
}

function invokeCustomClickEvent(defaultClickEvent) {
    //Najpierw obsługujemy domyślne zdarzenia click na buttonie
    console.log("<>< <>< <><");
    console.log("Event type=[" + defaultClickEvent.type + "] handling by custom button");
    defaultClickEvent.stopPropagation();

    console.log("invokeCustomClickEvent()");
    var customClickEvent = new Event("customClickEvent", {"bubbles": true, "cancelable": true, "composed": false}); //tworzymy i inicjalizujemy Event
    var customButton = document.getElementById("customButton");
    customButton.dispatchEvent(customClickEvent); //wywołujemy Event na elemencie
}

function handleCheckbox(event) {
    event.cancelable = false;
    console.log(event);
    console.log("<>< <>< <><");
    console.log("Event type=[" + event.type + "] handling by checkbox handler");
    event.preventDefault();
}

function changeBackgroundColor() {
    console.log("changeColeoe");
    var pelement = document.querySelector(".sampleClass");
    pelement.style.backgroundColor  = "green";
}