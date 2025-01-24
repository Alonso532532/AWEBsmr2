function ej1(){
    let dias = parseInt( prompt("Dame el numero de días."));
    let semanas = dias/7;
    diasr = dias%7;
    let semanasr = Math.trunc(semanas);
    alert(dias + " Días son " + semanasr + " semanas y " + diasr + " dias.");
}
function ej2(){
    let m = parseInt( prompt("Que tabla quieres"));
    console.log(m)
    for(let i = 0; i <= 10; i++){
        let resul = i * m;
        console.log(i + " X " + m + " = " + resul);
    }
    console.log("Un placer servirle.");
}
function ej3(){
    for(let i = 0; i <= 10; i = i + 2){
        let guard = guard + i;
    }
    alert(guard);
}