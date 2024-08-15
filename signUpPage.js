var logInBtn = document.getElementById('logInBtn');

logInBtn.addEventListener('click', function () {

    if (document.getElementById('accountNumber').value === '') {

        alert('Please input your Account Number!');

    } else if (document.getElementById('password').value === '') {

        alert('Please input your password!');

    } else {

        document.getElementById('aBtn').setAttribute('href', 'index.html');

    }
})

var aCancel = document.querySelector('.icon a');

aCancel.addEventListener('click', function () {

    aCancel.setAttribute('href', 'index.html');

})

var aTurnToCreateAccount = document.querySelector('#turnToCreateAccount a');

aTurnToCreateAccount.addEventListener('click', function () {

    aTurnToCreateAccount.setAttribute('href', 'createAccount.html');

});

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