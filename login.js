function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if ( username == "admin" && password == "4ywdFn5gLpaVzDQ"){
    window.location = "success.html";
    return false;
    }
    else{
        window.location = "failure.html";
    }
}