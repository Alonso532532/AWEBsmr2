function cambiarParrafo(){
    let nuevo = prompt("Establece el nuevo nombre");
    document.getElementById("parrafo").innerText = nuevo;
}
function apellidos(){
    let nuevo = prompt("Establece los nuevos apellidos");
    document.getElementById("parrafo2").innerText = nuevo;
}
function cambiarFondo(color){
    document.body.style.background = color;
    document.body.style.color = "white";
}
function OcultarFondo(){
    const texto = document.getElementById('miTexto');
    if ( texto.style.display == 'none' ){
        texto.style.display = 'block';
    } else {
        texto.style.display = 'none';
    }
}
