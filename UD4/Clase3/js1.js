let nota = parseInt( prompt("Introcde una nota"));
if(nota < 0) {
    console.log("Es un numero negativo");
}else if(nota < 5) {
    console.log("Está suspenso");
} else if(nota < 6) {
    console.log("Está aprobado");
} else if(nota < 8) {
    console.log("Es un notable");
} else if(nota <= 10) {
    console.log("Es un sobresaliente");
} else {
    console.log("numero mayor a diez");
}
