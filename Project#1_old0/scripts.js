const buttonBox = document.getElementById("button-box")
const logInButton = document.getElementById("login-button")
const singUpButton = document.getElementById("singup-button")
const logInFields = document.getElementById("login-fields")
const singUpFields = document.getElementById("singup-fields")
const logn = document.getElementById("log")

buttonBox.classList.add("button-box")
logInButton.classList.add("buttons")
singUpButton.classList.add("buttons")
logInFields.classList.add("login-box")
singUpFields.classList.add("singup-box")
logInButton.setAttribute("onclick", "logIn(); this.onclick=null;")
singUpButton.setAttribute("onclick", "singUp(); this.onclick-null;")

function logIn(){

     buttonBox.style = "display: none"
     logInFields.style = "position: relative; margin: auto;"
    var formlogin = document.createElement("FORM")
    var email = document.createElement("INPUT")
    var password = document.createElement("INPUT")
    var loginButt = document.createElement("INPUT")

    email.setAttribute("placeholder", "Email")
    email.setAttribute("type", "text")
    email.setAttribute("id", "mail")
    email.required = true
    password.setAttribute("type", "password")
    password.setAttribute("placeholder", "Password")
    password.setAttribute("id", "pass")
    password.required = true
    loginButt.setAttribute("type", "submit")
    loginButt.setAttribute("value", "Log In")
    loginButt.setAttribute("id", "login-button")
    loginButt.classList.add("buttons")
    
    logInFields.appendChild(formlogin)
    formlogin.appendChild(email)
    formlogin.appendChild(password)
    formlogin.appendChild(loginButt)
    loginButt.setAttribute("onclick", "authentication()")
    
}
function singUp(){

     buttonBox.style = "display: none"
     singUpFields.style = "position: relative; margin: auto; bottom: 400px;"
    var form = document.createElement("FORM")
    var firstName = document.createElement("INPUT")
    var lastName = document.createElement("INPUT")
    var email = document.createElement("INPUT")
    var password = document.createElement("INPUT")
    var checkBox = document.createElement("INPUT")
    var checkBoxText = document.createElement("LABEL")
    var singUpButtn = document.createElement("INPUT")


    firstName.setAttribute("type", "text")
    firstName.setAttribute("id", "name")
    lastName.setAttribute("type", "text")
    lastName.setAttribute("id", "lname")
    email.setAttribute("type", "text")
    email.setAttribute("id", "email")
    password.setAttribute("type", "password")
    password.setAttribute("id", "password")
    checkBox.setAttribute("type", "checkbox")
    checkBox.setAttribute("id", "checkbox")
    singUpButtn.setAttribute("id", "submitSingUp")
    singUpButtn.setAttribute("type", "submit")
    singUpButtn.setAttribute("value", "Sing Up")
    singUpButtn.classList.add("buttons")
    
    firstName.setAttribute("placeholder", "First name")
    firstName.required = true
    lastName.setAttribute("placeholder", "Last name")
    lastName.required = true
    email.setAttribute("placeholder", "Email")
    email.required = true
    password.setAttribute("placeholder", "Password")
    password.required = true
    checkBox.required = true
    checkBoxText.innerText = "I agree to the Terms of Use"
    
    singUpFields.appendChild(form)
    form.appendChild(firstName)
    form.appendChild(lastName)
    form.appendChild(email)
    form.appendChild(password)
    form.appendChild(checkBox)
    form.appendChild(checkBoxText)
    form.appendChild(singUpButtn)
    
    form.setAttribute("onsubmit", "registrationCompleted()")
}
function login () {

    var formlogins = document.createElement("FORM")
    var emails = document.createElement("INPUT")
    var passwords = document.createElement("INPUT")
    var loginButts = document.createElement("INPUT")

    emails.setAttribute("placeholder", "Email")
    emails.setAttribute("type", "text")
    emails.setAttribute("id", "mails")
    emails.required = true
    passwords.setAttribute("type", "password")
    passwords.setAttribute("placeholder", "Password")
    passwords.setAttribute("id", "passwd")
    passwords.required = true
    loginButts.setAttribute("type", "submit")
    loginButts.setAttribute("value", "Log In")
    loginButts.setAttribute("id", "login-buttons")
    loginButts.classList.add("buttons")
    
    logn.appendChild(formlogins)
    formlogins.appendChild(emails)
    formlogins.appendChild(passwords)
    formlogins.appendChild(loginButts)
    loginButts.setAttribute("onclick", "authentication()")
}

function registrationCompleted() {
    
    var fname = document.getElementById("name").value
    var lname = document.getElementById("lname").value
    var userEmail = document.getElementById("email").value
    var userPassword = document.getElementById("password").value

    localStorage.setItem("user-name", fname )
    localStorage.setItem("user-lastname", lname )
    localStorage.setItem("user-email", userEmail )
    localStorage.setItem("user-password", userPassword )

    login()
}
