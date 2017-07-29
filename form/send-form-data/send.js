function sendData(data) {
    /*sprawdzam czy przychodzi JSON czy HTMLFormElement
     https://stackoverflow.com/questions/11182924/how-to-check-if-javascript-object-is-json
     https://stackoverflow.com/questions/384286/javascript-isdom-how-do-you-check-if-a-javascript-object-is-a-dom-object
     */
    var request = new XMLHttpRequest();
    var jsonConstructor = {}.constructor;
    var urlEncodedDataPairs = [];
    var urlEncodedData = "";

    if (data instanceof HTMLFormElement) {
        console.log("html element come");
        //korzystam z jQuery więc w HTML muszę zaiporotwać bibliotekę
        console.log(data);
        var data = $('form').serializeArray();
        for (var i = 0; i < data.length; i++) {
            console.log(data[i]);
            urlEncodedDataPairs.push(encodeURIComponent(data[i]['name']) + '=' + encodeURIComponent(data[i]['value']))
        }
    }
    if (data.constructor === jsonConstructor) {
        console.log("json come");
        for (name in data) {
            urlEncodedDataPairs.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]))
        }
    }

    urlEncodedData = urlEncodedDataPairs.join('&').replace(/%20/g, '+');

    request.addEventListener('load', function (event) {
        alert('Pomyślnie wysłałeś dane')
    });

    request.addEventListener('error', function (event) {
        alert('Dane nie zostały wysłane. Wystąpił błąd.')
    });

    request.open('POST', 'http:/costam');
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    request.send(urlEncodedData);
}