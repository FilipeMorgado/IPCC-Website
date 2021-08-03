var mudar = document.getElementById("columntop1");
var storedName = sessionStorage.getItem("login_nome");
var storedPass = sessionStorage.getItem("login_pass");
var sessao = sessionStorage.getItem("sessao");
var delete_login =  document.getElementById("login");
var delete_registo = document.getElementById("registo");
var terminar = document.getElementById("logout");
var logout = document.querySelector("#logout");
var admin_session = sessionStorage.getItem("admin_session");

mudar_registo();

function mudar_registo(){

    if(sessao == 1){
        if( admin_session == 1){
            mudar.textContent = "Admin";
        } else{
            mudar.textContent=storedName;
        }
        
        delete_login.remove();
        delete_registo.remove();    
    } else{
        terminar.remove();
        
    }
}

terminar.addEventListener("click",function(){
    sessionStorage.setItem("sessao",0);
    sessionStorage.setItem("admin_session",0);
});
