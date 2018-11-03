function submitLogin() {
    var username = $("#username");
    var password = $("#password");
    var doSubmit = false;

    //username或password为空，输入框变红
    if(username.val().trim().length > 0){
        username.removeAttr("style");
        doSubmit = true;
    } else {
        username.css("border-bottom", "1px solid #ff0000");
        doSubmit = false;
    }
    if(password.val().trim().length > 0){
        password.removeAttr("style");
        doSubmit = true;
    } else {
        password.css("border-bottom", "1px solid #ff0000");
        doSubmit = false;
    }

    if(doSubmit){
        $()
    }
}

$(function () {
    $("#submit_button").click(submitLogin);
});
