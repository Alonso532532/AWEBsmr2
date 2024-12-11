
function BUno(){
    let pantalla = document.getElementById("pantalla");
    let uno = "1";
    pantalla.innerHTML += uno;
}
function BDos(){
    let pantalla = document.getElementById("pantalla");
    let uno = "2";
    pantalla.innerHTML += uno;
}
function BTres(){
    let pantalla = document.getElementById("pantalla");
    let uno = "3";
    pantalla.innerHTML += uno;
}
function BCuatro(){
    let pantalla = document.getElementById("pantalla");
    let uno = "4";
    pantalla.innerHTML += uno;
}
function BCinco(){
    let pantalla = document.getElementById("pantalla");
    let uno = "5";
    pantalla.innerHTML += uno;
}
function BSeis(){
    let pantalla = document.getElementById("pantalla");
    let uno = "6";
    pantalla.innerHTML += uno;
}
function BSiete(){
    let pantalla = document.getElementById("pantalla");
    let uno = "7";
    pantalla.innerHTML += uno;
}
function BOcho(){
    let pantalla = document.getElementById("pantalla");
    let uno = "8";
    pantalla.innerHTML += uno;
}
function BNueve(){
    let pantalla = document.getElementById("pantalla");
    let uno = "9";
    pantalla.innerHTML += uno;
}
function BCero(){
    let pantalla = document.getElementById("pantalla");
    let uno = "0";
    pantalla.innerHTML += uno;
}

//-----------------------------------------------------
function BB(){;
    pantalla.innerHTML = "";
}

//-----------------------------------------------------
function BSum(){
    let pantalla = document.getElementById("pantalla");
    let uno = "+";
    pantalla.innerHTML += uno;
}
function BRes(){
    let pantalla = document.getElementById("pantalla");
    let uno = "-";
    pantalla.innerHTML += uno;
}
function BMul(){
    let pantalla = document.getElementById("pantalla");
    let uno = "*";
    pantalla.innerHTML += uno;
}
function BDiv(){
    let pantalla = document.getElementById("pantalla");
    let uno = "/";
    pantalla.innerHTML += uno;
}

//-----------------------------------------------------

function BResultado(){
    let pantalla = document.getElementById("pantalla");
    alert("Operación " + pantalla)
    let resultado = parseInt(pantalla.innerHTML);
    alert(resultado)
}
