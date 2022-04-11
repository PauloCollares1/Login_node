// Grab elements from HTML
const script_login = document.getElementById('login_html');
const script_password = document.getElementById('password_html');
let self_deleted_alert = document.getElementById('alert_div');

// Verify if the user forgot to load or load correctly field 
function verifyField(){

    if(script_login.value == "" || script_password.value == ""){
        return alert("You forget a empty field");
    }else if(script_login.value.length < 6 || script_password.value.length < 6){
        return alert("Name and password has to be more then 6 and less then 36 character ");
    }else{
        return sendData();
    }
}

// Fetch data as a post method with my backend 
function sendData(){

    const form = {
        login : script_login.value,
        pass : script_password.value
    }
    options = {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(form)
    }
    fetch('/login', options)
    document.getElementById('login_html').value = "";
    document.getElementById('password_html').value = "";  
    setTimeout(() => {
        reciveData()
    }, 1000); 
}

// Recive data from backend and check if is ok or not at login
async function reciveData(){

    await fetch('/loginget')

        .then(response => response.json())
        .then(response => {
            if(response == true){
                delete_alert_sucess();
            }else{
                delete_alert_wrong();
            }
        })
}

// Fast message with a timer to let my user know what happened
function delete_alert_sucess(){

    let my_alert = (`<div class="child_alert"> Login sucess!</div>`);
    self_deleted_alert.insertAdjacentHTML('afterbegin', my_alert);
    let soon = document.querySelector('.child_alert');
    setTimeout(() => {
        self_deleted_alert.removeChild(soon);
    },3500)
    setTimeout(() => {
        window.location.href = "/private"
    },3500) 
}

// Fast message with a timer to let my user know what happened
function delete_alert_wrong(){

    let my_alert = (`<div class="child_alert"> login and password do not match  !</div>`);
    self_deleted_alert.insertAdjacentHTML('afterbegin', my_alert);
    let soon = document.querySelector('.child_alert');
    setTimeout(() => {
        self_deleted_alert.removeChild(soon);
    },3500) 
}