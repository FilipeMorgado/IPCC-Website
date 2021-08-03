var nome = document.querySelector("#nome");
var email = document.querySelector("#email");
var sexo = document.querySelector("#sexo");
var btnreg = document.querySelector("#btnreg");
var identidade = document.querySelector("#numero_identificacao");
var idade = document.querySelector("#idade");
var morada = document.querySelector("#morada");
var motivo = document.querySelector("#motivo");

function funcionar() {
    if (nome_validar(nome) == true && allLetter(nome) == true && validarsex(sexo) == true && validar_identidade(identidade) == true && validar_idade(idade) == true && validarEmail(email) == true && validar_morada(morada) == true && validar_motivo(motivo,10,300)) {
        alert("Formulário enviado com sucesso!");
        var link = "mailto:username@gmail.com" + "?subject=" + "Formulário" + "&body=" + "Nome="+escape(nome.value) +" "+"Identidade=" + escape(identidade.value) +" "+ "Idade=" + escape(idade.value) +" "+"Email="+ escape(email.value) +" "+ "Sexo="+escape(sexo.value) +" "+"Morada="+ escape(morada.value)+" "+"Motivo="+escape(motivo.value);                   
        location.href = link;
      
        
    }
    else {
       
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
    } else {
        return true;
    }
}

function validar_idade(idade) {

    if (idade.value >= 10 && idade.value <= 100) {
        return true;
    } else {
        alert("Insira a idade entre 10 e 100");
        return false;
    }
}

function validar_morada(morada) {
    var numero_letras = /^[A-Za-z0-9 ]+$/;
    if (morada.value.match(numero_letras)) {
        return true;
    } else {
        alert("Introduza uma morada correta");
        return false;
    }
}

function validar_identidade(identidade) {
    var numero = /^[0-9]+$/;
    if (identidade.value.match(numero)) {
        return true;
    } else {
        alert("Só pode usar numeros entre 0 e 9 na identificação");
        return false;
    }
}


function validar_motivo(motivo, mx,my) {
    var motivo_len = motivo.value.length;
    if (motivo_len == 0 || motivo_len >= my || motivo_len < mx) {
        alert("A mensagem não pode ficar vazia. Tem que ter de " + mx + " palavras a " + my);
        msg.focus();
        return false;
    } else {
        return true;
        
    }
}