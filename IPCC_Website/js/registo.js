var nome = document.querySelector("#nome");
var pass = document.querySelector("#pass");
var rpass = document.querySelector("#rpass");
var email = document.querySelector("#email");
var sexo = document.querySelector("#sexo");
var btnreg = document.querySelector("#btnreg");

function formValidation() {
    
    if (nome_validar(nome) == true && allLetter(nome)==true && pass_validar(pass, 5, 12) == true && validarpass(pass, rpass) == true && validarEmail(email) == true && validarsex(sexo) == true) {  
        sessionStorage.setItem("login_nome",nome.value);
        sessionStorage.setItem("login_pass",pass.value);
        alert("Conta criada com sucesso!");
        window.open("login.html");
    }
    else{
       
        return false;
    }    
}


function nome_validar(nome) {
    var nome_len = nome.value.length;
    if (nome_len == 0) {
        alert("O nome não pode estar vazio");
        nome.focus();
        return false;
    } 
    else
        return true;
}

function allLetter(nome) {
    var letters = /^[A-Za-z]+$/;
    if (nome.value.match(letters)) {
        return true;
    }
    else {
        alert('Nome só pode ter letras alfabéticas!');
        nome.focus();
        return false;
    }
}

function pass_validar(pass, mx, my) {
    var pass_len = pass.value.length;
    if (pass_len == 0 || pass_len > my || pass_len < mx) {
        alert("Password tem que ter de " + mx + " numeros/letras/simbolos a " + my);
        pass.focus();
        return false;
    }
    else
        return true;
}


/* */
function validarpass(pass, rpass) {
    if (pass.value != rpass.value) {
        alert("As passwords não são compativeis!");
        pass.focus();
        return false;
    }
    else
        return true;
}
/*******************/
function validarEmail(email) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value.match(mailformat)) {
        return true;
    }
    else {
        alert("Tem que introduzir um email correto!");
        email.focus();
        return false;
    }
}
function validarsex(sexo) {

    if (sexo.value == "Default") {
        alert('Selecione um sexo !');
        sexo.focus();
        return false;
    }else{
        return true;
    }  
}

