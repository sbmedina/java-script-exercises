// exercise 02-a
var text01 = 'so far so good';
console.log (text01.toUpperCase() );
// exercise 02-b
var text02 = 'stop wishing start doing'
var text03 = text02.substring (0,5);
console.log (text03);
// exercise 02-c
var text04 = 'today is the day'
var text05 = text04.substring (13,16);
console.log (text05);
// exercise 02-d
var text06 = 'tonight is the night'
var text07 = text06.substring (0,1);
var text08 = text07.toUpperCase ();
var text09 = text06.substring (1,20);
var text10 = text08 += text09;
console.log (text10)
// exercise 02-e
var text11 = 'where shopping is a pleasure'
console.log (text11.indexOf (' '))
// exercise 02-f
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