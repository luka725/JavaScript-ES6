const header = document.getElementById("Header")
const description = document.getElementById("Description")
const buttonDiv = document.getElementById("Login-Singup")
const login = document.getElementById("login")
const singup = document.getElementById("singup")
const log = document.getElementById("log")
const sing = document.getElementById("sing")

header.innerText = "To Do List"
description.innerText = "Make youre move This application will help you to create simple To Do list."
header.classList.add("header")
description.classList.add("description")
buttonDiv.classList.add("login-singup")
login.classList.add("buttons")
singup.classList.add("buttons")

function singUp(){

    singup.style = "display: none"
    login.style = "display: none" 
    var form = document.createElement("FORM")
    var firstName = document.createElement("INPUT")
    var lastName = document.createElement("INPUT")
    var email = document.createElement("INPUT")
    var password = document.createElement("INPUT")
    var checkBox = document.createElement("INPUT")
    var checkBoxText = document.createElement("LABEL")
    var submit = document.createElement("BUTTON")

    firstName.setAttribute("type", "text")
    firstName.setAttribute("id", "name")
    lastName.setAttribute("type", "text")
    email.setAttribute("type", "text")
    password.setAttribute("type", "password")
    checkBox.setAttribute("type", "checkbox")
    checkBox.setAttribute("id", "checkbox")
    checkBoxText.setAttribute("for", "checkbox")
    submit.setAttribute("id", "submit")
    submit.setAttribute("type", "submit")
    submit.setAttribute("value", "Sing Up")
    submit.classList.add("buttons")

    firstName.setAttribute("placeholder", "First Name:")
    lastName.setAttribute("placeholder", "Last Name:")
    email.setAttribute("placeholder", "Email:")
    password.setAttribute("placeholder", "Password:")
    submit.innerText = "Sing Up"
    checkBoxText.innerText = "I agree to the Terms of Use"
    
    sing.appendChild(form)
    form.appendChild(firstName)
    form.appendChild(lastName)
    form.appendChild(email)
    form.appendChild(password)
    form.appendChild(checkBox)
    form.appendChild(checkBoxText)
    form.appendChild(submit)
    
    document.getElementById("submit").addEventListener("click", function(){
        e = document.getElementById("name").innerText
        localStorage.setItem("user-name", e )
        var mystorage = window.localStorage;
        console.log(mystorage)
    })


    // localStorage.setItem("user-name", firstName.innerText )
    // localStorage.setItem("user-lastname", lastName.innerText )
    // localStorage.setItem("user-email", email.innerText 
    // localStorage.setItem("user-password", password.innerText )
    
    // var mystorage = window.localStorage;
    // console.log(mystorage)
}

function logIn(){

    singup.style = "display: none"
    login.style = "display: none" 
    var form = document.createElement("FORM")
    var email = document.createElement("INPUT")
    var password = document.createElement("INPUT")
    var submit = document.createElement("INPUT")

    email.setAttribute("type", "text")
    password.setAttribute("type", "password")
    email.setAttribute("placeholder", "Email:")
    password.setAttribute("placeholder", "Password:")
    submit.setAttribute("id", "submit")
    submit.setAttribute("type", "submit")
    submit.setAttribute("value", "Log In")
    submit.classList.add("buttons")
    
    log.appendChild(form)
    form.appendChild(email)
    form.appendChild(password)
    form.appendChild(submit)
    

}


