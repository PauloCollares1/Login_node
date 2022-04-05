

const script_login = document.getElementById('login_html');
const script_password = document.getElementById('password_html');
let self_deleted_alert = document.getElementById('alert_div');

function verifyField(){

    if(script_login.value == "" || script_password.value == ""){
        return alert("You forget a empty field");
    }else if(script_login.value.length < 6 || script_password.value.length < 6){
        return alert("Name and password has to be more then 6 and less then 36 character ");
    }else{
        return sendData();
    }
}


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
    fetch('/check', options)
    document.getElementById('login_html').value = "";
    document.getElementById('password_html').value = "";  
    setTimeout(() => {
        reciveData()
    }, 1000); 
}

async function reciveData(){

    await fetch('/loginget')
        .then(response => response.json())

        .then(response => {
            if(response == true){
                console.log("Login success" + response)
                delete_alert_sucess();
            }else{
                console.log("Not match:" + response)
                delete_alert_wrong();
            }
        })
}

function delete_alert_sucess(){

    let my_alert = (`<div class="child_alert"> Login sucess!</div>`);

    self_deleted_alert.insertAdjacentHTML('afterbegin', my_alert);

    let soon = document.querySelector('.child_alert');
    setTimeout(() => {
        self_deleted_alert.removeChild(soon);
    },3500) 
}

function delete_alert_wrong(){

    let my_alert = (`<div class="child_alert"> login and password do not match  !</div>`);

    self_deleted_alert.insertAdjacentHTML('afterbegin', my_alert);

    let soon = document.querySelector('.child_alert');
    setTimeout(() => {
        self_deleted_alert.removeChild(soon);
    },3500) 
}