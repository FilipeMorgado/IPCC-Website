var storedName = sessionStorage.getItem("login_nome");
var storedPass = sessionStorage.getItem("login_pass");
var admin_session = sessionStorage.getItem("admin_session");

function validar(form) {  

    if ((form.nome.value ==  storedName && form.pass.value == storedPass)||(form.nome.value ==  "admin" && form.pass.value == "12345")) {
        if(form.nome.value ==  "admin"){
            sessionStorage.setItem("admin_session",1);
        }
        sessionStorage.setItem("sessao",1);
        alert("Bem vindo");    
        window.open("home.html");
               
    }
     else{
        alert("Password errada ou utilizador errado!");
        window.open("login.html");
        return false;
    }
}

