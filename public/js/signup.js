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

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "connect.sid=s%3AsszHCtCiKyFoIypMGdTEkcmuv_tTlhby.1mOE0V6hf%2FZ8CWUDdkCgZB%2F9ypCjjNMC8UopGk8ckN0");

    var raw = JSON.stringify({
        "username": usernameEl,
        "email": emailEl,
        "password": passwordEl
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("/api/users/", requestOptions)
    .then(response => {
        console.log(response);
        if (!response.ok) {
            throw new Error(response.json().message)
        }
        return response.json()
    })
        .then(result => {
            console.log(result)
            window.location.href = '../html/index.html'
          })
        .catch(error => console.log('error', error));
}

loginEl.addEventListener('click', jumpToLogin);

signupEl.addEventListener('click', Signup)