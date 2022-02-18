const loginEl = document.querySelector('#login-button');
const signupEl = document.querySelector('#signup-button');







function grabLoginInfo() {
    console.log('clicked');
    let usernameEl = document.querySelector('#typeUsernameX-2').value
    let passwordEl = document.querySelector('#typePasswordX-2').value
    console.log(usernameEl);
    console.log(usernameEl.type);
    console.log(passwordEl);

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Cookie", "connect.sid=s%3Aw70rNZj02T-VIqfFnCbCurmEXSxwKHxv.fbJ64jBLqwfIrThl5gtaxpIYC1Kh9V1giVXwDozcGmM");

var raw = JSON.stringify({
  "username": usernameEl,
  "password": passwordEl
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("/api/users/login", requestOptions)
  .then(response => response.text())
  .then(result => {
      console.log(result)
      window.location.href = '../html/index.html'
    })
  .catch(error => console.log('error', error));
}

function jumpToSignup() {
    console.log('signup button clicked')
    window.location.href = '../html/signup.html'
}


loginEl.addEventListener('click', grabLoginInfo);

signupEl.addEventListener('click', jumpToSignup)
