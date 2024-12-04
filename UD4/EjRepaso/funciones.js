//Ej1////////////////////////////////////////////////////////////////////////////////
function ej1(){
    let num = parseInt(prompt("Dame un numero y te diré si es par o mpar"));
    function poi(num) {
        if (num % 2 == 0) {
            let dec = "Par";
            return dec;
        } else {
            let dec = "Impar"
            return dec;
        }
    }
    alert("El numero es " + poi(num))
}
//Ej2////////////////////////////////////////////////////////////////////////////////

function ej2(){
    let num1 = parseInt(prompt("Dame un numero y te diré cual es el mayor"));
    let num2 = parseInt(prompt("Dame otro numero"));
    let num3 = parseInt(prompt("Dame otro numero"));
    //Me e complicado la vida, este function no hace falta
    function comp(num1, num2, num3){
        if(num1 > num2 && num1 > num3){
            alert("El numero mayor es " + num1);
        }
        if(num2 > num1 && num2 > num3){
            alert("El numero mayor es " + num2);
        }
        if(num3 > num2 && num3 > num1){
            alert("El numero mayor es " + num3);
        }
    }
    comp(num1, num2, num3)
}
//Ej3////////////////////////////////////////////////////////////////////////////////
function ej3(){
    let nota = parseInt(prompt("Dame una nota"));
    if(nota < 0){
        alert("Numero menor a cero");
    } else if(nota < 50){
        alert("Insuficiente");
    } else if(nota < 60){
        alert("Suficiente");
    } else if(nota < 70){
        alert("Bien");
    } else if(nota < 90){
        alert("Notable");
    } else if(nota <= 100){
        alert("Sobresaliente");
    } else {
        alert("Nota superior a 100")
    }
}
//Ej4////////////////////////////////////////////////////////////////////////////////
function ej4(){
    let anio = parseInt( prompt("Dime un año"))
    if ( anio % 4 === 0){
        alert("El año es bisiesto")
    } else {
        alert("El año no es bisiesto")
    }
}
//Ej5////////////////////////////////////////////////////////////////////////////////
function ej5(){
    
}