const loginEl = document.querySelector('#login-button');




function grabLoginInfo() {
    console.log('clicked');
    let usernameEl = document.querySelector('#typeUsernameX-2').value
    let passwordEl = document.querySelector('#typePasswordX-2').value
    console.log(usernameEl);
    console.log(passwordEl);
}


loginEl.addEventListener('click', grabLoginInfo);