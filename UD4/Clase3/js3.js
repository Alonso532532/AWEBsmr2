let val = parseInt( prompt("Introduce multiplicador"));
let res;
let cuenta = 1;
for( cuenta = 1; cuenta <= 10; cuenta++ ) {
res = cuenta * val;
console.log(cuenta + " por " + val + " es igual a " + res);
}