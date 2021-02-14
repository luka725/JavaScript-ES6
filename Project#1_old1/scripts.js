const buttonsDiv = document.getElementById("button-box")
const loginButton = document.getElementById("login")
const singUpButton = document.getElementById("singup") 
const logInFields = document.getElementById("login-fields")
const singUpFields = document.getElementById("singup-fields")

buttonsDiv.classList.add("button-box")
loginButton.classList.add("buttons")
singUpButton.classList.add("buttons")
loginButton.setAttribute("onclick", "logIn(); this.onclick=null;")
singUpButton.setAttribute("onclick", "singUp(); this.onclick-null;")
logInFields.classList.add("login-box")
singUpFields.classList.add("singup-box")

var count = 0;
function logIn(){

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
    loginButt.classList.add("buttonlogin")
    
    logInFields.appendChild(formlogin)
    formlogin.appendChild(email)
    formlogin.appendChild(password)
    formlogin.appendChild(loginButt)
    loginButt.setAttribute("onclick", "authentication()")
    
}

function singUp(){

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
    singUpButtn.classList.add("buttonsingup")
    
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
    
    singUpButtn.setAttribute("onclick", "registrationCompleted(); this.onclick=null" )
    
}
function registrationCompleted() {
    
    var fname = document.getElementById("name").value
    var lname = document.getElementById("lname").value
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value

    localStorage.setItem("user-name", fname )
    localStorage.setItem("user-lastname", lname )
    localStorage.setItem("user-email", email )
    localStorage.setItem("user-password", password )

    count ++
    logIn()
}

function authentication(){
    var field1 = document.getElementById("pass").value
    var field2 = document.getElementById("mail").value

    var userEmail = localStorage.getItem("user-email")
    var userPassword = localStorage.getItem("user-password")

    if ( field1 == userPassword && field2 == userEmail) {
        logger()
    } else{
        var err = document.createElement("P");
        err.innerText = "Sry"
        body.appendChild(err)
    }
}

function logger(){
    alert("done")
}

