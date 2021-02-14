const divLogin = document.getElementById("login-fields")
const divSingup = document.getElementById("singup-fields")
const divLoginAfter = document.getElementById("login-after")
const logsingbuttons = document.getElementById("button-box")
const failed = document.getElementById("fail")
const todo = document.getElementById("todo")
const list = document.getElementById("list")

function login() {

    logsingbuttons.style = "display: none;"

    var form = document.createElement("form")
    var email = document.createElement("input")
    var password = document.createElement("input")
    var submit = document.createElement("input")

    form.classList.add("form")
    form.setAttribute("onsubmit", "failedauthentication(); return false")
    email.setAttribute("type", "text")
    email.setAttribute("placeholder", "Email:")
    password.setAttribute("type", "password")
    password.setAttribute("placeholder", "Password:")
    submit.setAttribute("type", "submit")
    submit.setAttribute("value", "Log in" )
    submit.classList.add("button")

    email.required = true
    password.required = true

    divLogin.appendChild(form)
    form.appendChild(email)
    form.appendChild(password)
    form.appendChild(submit)

}
function singup() {

    logsingbuttons.style = "display: none;"

    var formsing = document.createElement("form")
    var name = document.createElement("input")
    var surname = document.createElement("input")
    var emailsing = document.createElement("input")
    var passwordsing = document.createElement("input")
    var submitsing = document.createElement("input")

    formsing.setAttribute("onsubmit", "aftersingup();return false;")
    formsing.classList.add("form")
    name.setAttribute("type", "text")
    name.setAttribute("id", "name")
    name.setAttribute("placeholder", "Name:")
    surname.setAttribute("type", "text")
    surname.setAttribute("placeholder", "Surname:")
    surname.setAttribute("id", "surname")
    emailsing.setAttribute("type", "email")
    emailsing.setAttribute("placeholder", "Email:")
    emailsing.setAttribute("id", "email")
    passwordsing.setAttribute("type", "password")
    passwordsing.setAttribute("placeholder", "Password:")
    passwordsing.setAttribute("id", "password")
    submitsing.setAttribute("type", "submit")
    submitsing.setAttribute("value", "Sing up")
    submitsing.classList.add("button")
    
    name.required = true
    surname.required = true
    emailsing.required = true
    passwordsing.required = true

    divSingup.appendChild(formsing)
    formsing.appendChild(name)
    formsing.appendChild(surname)
    formsing.appendChild(emailsing)
    formsing.appendChild(passwordsing)
    formsing.appendChild(submitsing)
    
}
function aftersingup() {

    divSingup.style = "display: none;"

    var emailafter = document.getElementById("email")
    var passwordafter = document.getElementById("password")

    localStorage.setItem("user-email", emailafter.value ) 
    localStorage.setItem("user-password", passwordafter.value )
    
    var formafter = document.createElement("form")
    var emailaftersing = document.createElement("input")
    var passwordaftersing = document.createElement("input")
    var submitafter = document.createElement("input")

    formafter.setAttribute("onsubmit", "authentication(); return false;")
    formafter.classList.add("form")
    emailaftersing.setAttribute("type", "text")
    emailaftersing.setAttribute("id", "emailelem")
    emailaftersing.setAttribute("placeholder", "Email:")
    passwordaftersing.setAttribute("type", "password")
    passwordaftersing.setAttribute("id", "passwordelem")
    passwordaftersing.setAttribute("placeholder", "Password:")
    submitafter.setAttribute("type", "submit")
    submitafter.setAttribute("value", "Log in")
    submitafter.classList.add("button")
    
    emailaftersing.required = true
    passwordaftersing.required = true

    divLoginAfter.appendChild(formafter)
    formafter.appendChild(emailaftersing)
    formafter.appendChild(passwordaftersing)
    formafter.appendChild(submitafter)

}
function authentication() {
    var logauthemail = document.getElementById("emailelem").value
    var logauthpassword = document.getElementById("passwordelem").value

    var usremail = localStorage.getItem("user-email")
    var userpassword = localStorage.getItem("user-password")

    if (logauthemail === usremail && logauthpassword === userpassword) {
        todofields()
    }else{
        failedauthentication()
    }
}
function failedauthentication() {
    failed.innerText = "User name or Password is incorrect!"
}
function todofields(){

    divLoginAfter.style = "display: none"

    var formtodo = document.createElement("form")
    var texttodo = document.createElement("input")
    var submittodo = document.createElement("input")

    formtodo.setAttribute("onsubmit", "listadder(); return false")
    texttodo.setAttribute("type" , "text")
    texttodo.setAttribute("placeholder", "Type what you whant to do")
    texttodo.setAttribute("id", "text")
    texttodo.style = "width: 400px"
    submittodo.setAttribute("type", "submit")
    submittodo.setAttribute("value", "add")
    submittodo.classList.add("button")

    todo.appendChild(formtodo)
    formtodo.appendChild(texttodo)
    formtodo.appendChild(submittodo)

}
let n = 1
function listadder() {
    var text = document.getElementById("text").value
    var textline = document.createElement("p")

    textline.innerText = n + "." + " " + text
    textline.classList.add("list-element")
    list.appendChild(textline)
    n++
}
