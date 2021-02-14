const bdy =
    `
    <h1>To-Do List</h1>
    <h2>First You Need to register If you aren't creator</h2>
    <div id="button-box" class="button-box">
        <button id="login" onclick="login(); this.onclick = null;">Log in</button>
        <button id="singup" onclick="singup(); this.onclick = null;">Sing up</button>
    </div>
    <div id="login-fields"></div>
    <div id="singup-fields"></div>
    <div id="login-after"></div>
    <p class="fail" id="fail"></p>
    <div id="todo"></div>
    <div id="list" class="list"></div>
    `    
document.body.innerHTML = bdy

function login() {
    document.getElementById("button-box").style = "display: none;"
    var loginFields = document.getElementById("login-fields")
    var loginForm = 
    `
    <form class="form" onsubmit="failedauthentication(); return false">
        <input type="text" placeholder="Email:" required>
        <input type="password" placeholder="Password:" required><br>
        <input type="submit" value="Log in" class="button">
    </form>
    `
    loginFields.innerHTML = loginForm
}
function singup() {
    document.getElementById("button-box").style = "display: none;"
    var singUpFields = document.getElementById("singup-fields")
    var singUpForm =
    `
    <form onsubmit="aftersingup();return false;" class="form">
        <input type="text" id="name" placeholder="Name:" required>
        <input type="text" placeholder="Surname:" id="surname" required>
        <input type="email" placeholder="Email:" id="email" required>
        <input type="password" placeholder="Password:" id="password" required><br>
        <input type="submit" value="Sing up" class="button">
    </form>
    `
    singUpFields.innerHTML = singUpForm
}
function aftersingup() {

    document.getElementById("singup-fields").style = "display: none;"
    var loginAfter = document.getElementById("login-after")

    var emailafter = document.getElementById("email")
    var passwordafter = document.getElementById("password")

    localStorage.setItem("user-email", emailafter.value ) 
    localStorage.setItem("user-password", passwordafter.value )

    var loginAfterForm =
    `
    <form onsubmit="authentication(); return false;" class="forms">
        <input type="text" id="emailelem" placeholder="Email:" required>
        <input type="password" id="passwordelem" placeholder="Password:" required><br>
        <input type="submit" value="Log in" class="button">
    </form>
    `
    loginAfter.innerHTML = loginAfterForm
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
    var failedP = document.getElementById("fail")
    failedP.innerText = "User name or Password is incorrect!"
}    
function todofields() {
    document.getElementById("login-after").style = "display: none;"
    var todoFields = document.getElementById("todo")
    var todoForm =
    `
    <form onsubmit="listadder(); return false">
        <input type="text" placeholder="Type what you whant to do" id="text" style="width: 400px;"><br>
        <input type="submit" value="add" class="button">
    </form>
    `
    todoFields.innerHTML = todoForm
}
let n = 1
function listadder() {
    var text = document.getElementById("text").value
    var textline = document.createElement("p")
    var textPlace = document.getElementById("list")
    textline.innerText = `${n}. ${text}` 
    textline.classList.add("list-element")
    textPlace.appendChild(textline)
    n++
}


