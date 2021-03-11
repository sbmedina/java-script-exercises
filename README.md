# java-script-exercises

Each of the following exercises must be solved and uploaded to a new repository on Github.
Please solve them in the proposed order and make a commit for each solved exercise.
Add the statement of each exercise as a comment in its solution.

List of exercises:

1) Variables and Operators
a) Create two numeric variables and use the sum operator to save the value of the sum of both numbers in a third variable.
b) Create two variables of type String and concatenate them, saving the result in a third variable.
c) Create two variables of type String and add the length of each variable (number of letters in the string), saving the result of a third variable (use length).

2) Strings
a) Create a string variable with at least 10 characters and convert all text to uppercase (use toUpperCase).
b) Create a variable of type string with at least 10 characters and generate a new string with the first 5 characters, saving the result in a new variable (use substring).
c) Create a variable of type string with at least 10 characters and generate a new string with the last 3 characters, saving the result in a new variable (use substring).
d) Create a string type variable with at least 10 characters and generate a new string with the first letter in uppercase and the others in lowercase. Save the result in a new variable (use substring, toUpperCase, toLowerCase, and the + operator).
e) Create a variable of type string with at least 10 characters and some blank space. Find the position of the first whitespace and save it to a variable (use indexOf).
f) Create a string variable with at least 2 long words (10 characters and some space in between). Use the methods of the previous exercises to generate a new string that has the first letter of both words in uppercase and the other letters in lowercase (use indexOf, substring, toUpperCase, toLowerCase and the operator +).

3) Arrays
a) Given the following array: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November "," December "] show months 5 and 11 per console (use console.log)
b) Sort the array of months alphabetically and display it by console (use sort).
c) Add an element to the beginning and end of the array (use unshift and push).
d) Remove an element from the beginning and the end of the array (use shift and pop).
e) Reverse the order of the array (use reverse)
f) Unite all the elements of the array in a single string where each month is separated by a hyphen - (use join).
g) Create a copy of the array of months that contains from May to November (use slice).

4) If Else
a) Create a random number between 0 and 1 using the Math.random () function, if the value is greater than or equal to 0.5 show an alert with the message "Greater than 0.5" and if not an alert with the message "Lower than 0.5"
b) Create an “Age” variable that contains an integer between 0 and 100 and displays the following alert messages:
"Baby" if the age is less than 2 years
"Child" if the age is between 2 and 12 years
“Adolescent” if the age is between 13 and 19 years old
"Young" if the age is between 20 and 30 years
"Adult" between 31 and 60 years old
“Elderly” between 61 and 75 years old
"Elderly" if older than 75 years

5) For
a) Create an array containing 5 words and loop through the array using a JavaScript for loop to display an alert using each of the words.
b) In the above array, convert the first letter of each word to uppercase and show an alert for each modified word.
c) Create a variable called "sentence" that has an empty string, then the array from point a) go through it with a for loop to save each word within the sentence variable. At the end show a single alert with the complete chain.
d) Create an empty array and with a for loop of 10 repetitions fill the array with the repetition number, that is, at the end of the execution of the for loop there should be 10 elements within the array, from the number 0 to the number 9. Display the final array through the browser console (use console.log).

6) Functions
a) Create a sum function that receives two numerical values and returns the result. Execute the function and save the result in a variable, showing the value of said variable in the browser console.
b) To the previous sum function, add a validation to control if any of the parameters is not a number, show an alert clarifying that one of the parameters has an error and return the NaN value as a result.
c) Create a validate integer function that receives a number as a parameter and returns true if it is an integer.
d) To the sum function of exercise 6b) add a call that validates that the numbers are integers. In case there are decimals, show an alert with the error and return the number converted to integer (rounded).
e) Convert the validation of exercise 6b) into a separate function and call it within the sum function, testing that everything continues to work the same.
