//exercise 03-a
let months= ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log (months [4] + months [10] );
//exercise 03-b
console.log (months.sort());
//exercise 03-c
months.unshift ("January");
months.push ("2020");
console.log (months);
//exercise 03-d
months.pop ();
months.shift ();
console.log (months);
//exercise 03-e
months.reverse ();
console.log (months);
//exercise 03-f
console.log (months.join ('-'))
//exercise 03-g
let months02= ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log (months02.slice (4,11))