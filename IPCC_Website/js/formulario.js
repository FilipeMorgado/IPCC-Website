var nome = document.querySelector("#nome");
var email = document.querySelector("#email");
var msg = document.querySelector("#msg");



function formValidation() {

    if (nome_validar(nome) == true && allLetter(nome) == true && validarEmail(email) == true && validarmsg(msg,10,100) == true) {
    
        var link = "mailto:username@gmail.com" + "?subject=" + "Mensagem" + "&body=" + "Nome="+escape(nome.value) +" "+"Email="+ escape(email.value) +" "+ "Mensagem=" + escape(msg.value);
        location.href = link;  
        alert("Formulario enviado com sucesso!");
        window.open('home.html');
    }
    else{
        return false;
    }
}

function validarmsg(msg, mx,my) {
    var msg_len = msg.value.length;
    if (msg_len == 0 || msg_len >= my || msg_len < mx) {
        alert("A mensagem não pode ficar vazia. Tem que ter de " + mx + " palavras a " + my);
        msg.focus();
        return false;
    } else {
        return true;
        
    }
}

function nome_validar(nome) {
    var nome_len = nome.value.length;
    if (nome_len == 0) {
        alert("O nome não pode estar vazio!");
        nome.focus();
        return false;
    }
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




