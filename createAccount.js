btn.onclick = function () {

    var btn = document.getElementsByClassName('btn')[0];
    var username = document.getElementById('username');
    var email = document.getElementById('email');
    var password = document.getElementById('password');

    if (username.value === '' || email.value === '' || password.value === '') {

        alert('Please complete all the information!');

    } else {

        submitBtn.setAttribute('href', 'signUpPage.html');

    }
}

var aCancel = document.querySelector('.icon a');
var aTurnToSignUp = document.querySelector('#turnToSignUp a');

aCancel.onclick = function () {

    aCancel.setAttribute('href', 'index.html');

}

aTurnToSignUp.onclick = function () {
    aTurnToSignUp.setAttribute('href', 'signUpPage.html');
}

var eyeClose = document.getElementById('eyeClose');
var eyeOpen = document.getElementById('eyeOpen');

eyeClose.onclick = function () {

    eyeClose.setAttribute("style", "display: none");
    eyeOpen.setAttribute("style", "display: block");
    password.setAttribute("type", "text");

}

eyeOpen.onclick = function () {

    eyeOpen.setAttribute("style", "display: none");
    eyeClose.setAttribute("style", "display: block");
    password.setAttribute("type", "password");

}