// 6) Funciones
// a) Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.
var a = 4;
var b = 3.3;
function sum (a,b) {
    return a + b;
}
var result = sum (a,b);
console.log (result);
// b) A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.
if (typeof (a) == 'number' && typeof (b) == 'number') {
    alert (result);
} else if (typeof (a) != 'number' || typeof (b) != 'number') {
    alert ('One of the parameters has error ' + NaN)
}
// c) Crear una función validate integer que reciba un número como parámetro y verdadero si es un número entero.
console.log (Number.isInteger(5))
// d) A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).
if (typeof (a) == 'number' && typeof (b) == 'number') {
    if (Number.isInteger(a) && Number.isInteger (b)) {
        console.log (result);
    } else { 
        alert ('Error: at least one number is not a integer. It should be: ' + Math.round (a) + ' and ' + Math.round (b))         
    }
}
// e) Convertir la validación del ejercicio 6b) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.
