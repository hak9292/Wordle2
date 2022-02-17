const loginEl = document.querySelector('#login-button');
const signupEl = document.querySelector('#signup-button');



function jumpToLogin() {
    window.location.href = '../html/login.html'
}


function Signup() {
    console.log('clicked');
    let usernameEl = document.querySelector('#typeUsernameX-2').value
    let emailEl = document.querySelector('#typeEmailX-2').value
    let passwordEl = document.querySelector('#typePasswordX-2').value
    console.log(usernameEl);
    console.log(emailEl);
    console.log(passwordEl);
}

loginEl.addEventListener('click', jumpToLogin);

signupEl.addEventListener('click', Signup)