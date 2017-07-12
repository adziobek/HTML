function handleUserData(form) {
    //w przeglądarce: $(document.getElementsByName('user_data')[0]).serializeArray()
    var userData = $(form).serializeArray();
    for (var i = 0; i < userData.length; i++) {
        console.log(userData[i]);
    }
}