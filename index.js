
function validate() {
    var username = document.getElementById('username').value
    var emailAddress = document.getElementById('EmailAddress').value
    var password = document.getElementById('pass').value
    var confirm = document.getElementById('Cpass').value
    
    

    checkUserName(username)
    checkEmail(emailAddress)
    checkPassword(password)
    checkPasswordMatch(password, confirm)
}

function checkUserName(username) {
    if(username.length >= 8){
        document.getElementById('username_error').innerText = " "
        document.getElementById('username').classList.add('success')
        document.getElementById('username').classList.replace('error', 'success')
    }
    else{
        document.getElementById('username').classList.add('error')
        document.getElementById('username_error').innerText = "User Name is short"
    }
    console.log(username)
}

function checkEmail(emailAddress) {
    if(emailAddress.includes('@')){
        document.getElementById('EmailAddress').classList.add('success')
        document.getElementById('EmailAddress').classList.replace('error', 'success')
        document.getElementById('email_error').innerText = " "
    }
    else{
        document.getElementById('EmailAddress').classList.add('error')
        document.getElementById('email_error').innerText = "Email Must contain @"
    }

    console.log(emailAddress)
}

function checkPassword(password) {
    if (password.length >= 8 & password.includes('@')) {
        document.getElementById('pass').classList.add('success')
        document.getElementById('pass').classList.replace('error', 'success')
        document.getElementById('password_error').innerText = " "
    }
    else{
        document.getElementById('pass').classList.add('error')
        document.getElementById('password_error').innerText = "Too short"
    }
    console.log(password)
}

function checkPasswordMatch(password, confirm){
    if (password === confirm) {

        document.getElementById('Cpass').classList.add('success')
        document.getElementById('Cpass').classList.replace('error', 'success')
        document.getElementById('confirm_error').innerText = " "
        
    }
    else{
        document.getElementById('Cpass').classList.add('error')
        document.getElementById('confirm_error').innerText = "Password Miss match"
    }

    console.log(confirm)
}