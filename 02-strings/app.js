// 2) Strings
// a) Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).
var text01 = 'so far so good';
console.log (text01.toUpperCase() );
// b) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
var text02 = 'stop wishing start doing'
var text03 = text02.substring (0,5);
console.log (text03);
// c) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).
var text04 = 'today is the day'
var text05 = text04.substring (13,16);
console.log (text05);
// d) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
var text06 = 'tonight is the night'
var text07 = text06.substring (0,1);
var text08 = text07.toUpperCase ();
var text09 = text06.substring (1,20);
var text10 = text08 += text09;
console.log (text10)
// e) Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
var text11 = 'where shopping is a pleasure'
console.log (text11.indexOf (' '))
// f) Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).
var text12 = 'shopping pleasure'
text12.indexOf (' ')
var text13 = text12.substring (0,1)
var text14 = text13.toUpperCase ()
var text15 = text12.substring (9,10)
var text16 = text15.toUpperCase ()
var text17 = text12.substring (1,9)
var text18 = text17.toLowerCase ()
var text19 = text12.substring (10,17)
var text20 = text19.toLowerCase ()
console.log (text14 + text18 + text16 + text20)