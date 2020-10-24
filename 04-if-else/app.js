//exercise 4-a
var random = Math.random ();
console.log (random);
if (random >= 0.5) {
    alert ("Greater than 0,5");
} else {
    alert ("Lower than 0,5");
}
//exercise 4-b
var Age = Math.floor(Math.random() * 100) + 1;
console.log (Age);
if (Age < 2) {
    alert ("Bebe");
} else if ((Age >= 2) && (Age <= 12)){
    alert ("Nino");
} else if ((Age >= 13) && (Age <= 19)){
    alert ("Adolescente");
} else if ((Age >= 20) && (Age <= 30)){
    alert ("Joven");
} else if ((Age >= 31) && (Age <= 60)){
    alert ("Adulto");
} else if ((Age >= 61) && (Age <= 75)){
    alert ("Nino");
} else if (Age >= 76){
    alert ("Anciano");
}