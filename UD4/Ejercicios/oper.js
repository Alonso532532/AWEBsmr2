let num = parseInt( prompt("Dame un numero"));
// Comprueva si es o no par
function comp(num){
    if(num % 2 == 0){
        return true;
    } else {
        return false;
    }
}

let res = comp(num);
// Le doy valor
if ( res ){
    alert("El numero es par");
} else {
    alert("El numero es impar");
}
