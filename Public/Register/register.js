// Grab elements from HTML
const script_login = document.getElementById('login_html');
const script_email = document.getElementById('email_html');
const script_password = document.getElementById('password_html');
let self_deleted_alert = document.getElementById('alert_div');

// Verify if the user forgot to load or load correctly field 
function verifyField(){

    if(script_login.value == "" || script_password.value == "" || script_email.value == ""){
        return alert("You forget a empty field");
    }else if(script_login.value.length < 6 || script_password.value.length < 6 || script_email.value.length < 6){
        return alert("Name and password has to be more then 6 and less then 36 character ");
    }else{
        return sendData()
    }
}

// Fetch data as a post method with my backend 
function sendData(){

    const form = {
        email: script_email.value,
        login : script_login.value,
        pass : script_password.value
    }
    options = {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(form)
    }
    fetch('/register', options)
    document.getElementById('login_html').value = "";
    document.getElementById('email_html').value = "";
    document.getElementById('password_html').value = "";
    setTimeout(() => {
        reciveData()
    }, 500);
    
}

// Recive data from backend and check if is ok or not at login
function reciveData(){

    fetch('/registerget')
        .then(response => response.json())

        .then(data => {
            if(data == true){
                console.log("foi verdade:" + data)
                return delete_alert_wrong()
            }else{
                console.log("foi falso:" + data)
                return delete_alert_sucess()
            }
        })
}

// Fast message with a timer to let my user know what happened
function delete_alert_sucess(){

    let my_alert = (`<div class="child_alert"> Account created!</div>`);
    self_deleted_alert.insertAdjacentHTML('afterbegin', my_alert);
    let soon = document.querySelector('.child_alert');
    setTimeout(() => {
        self_deleted_alert.removeChild(soon);
    },3500) 
    setTimeout(() => {
        window.location.href = "/"
    },3500)
}

// Fast message with a timer to let my user know what happened
function delete_alert_wrong(){

    let my_alert = (`<div class="child_alert"> that e-mail already been taken!</div>`);
    self_deleted_alert.insertAdjacentHTML('afterbegin', my_alert);
    let soon = document.querySelector('.child_alert');
    setTimeout(() => {
        self_deleted_alert.removeChild(soon);
    },3500) 
}