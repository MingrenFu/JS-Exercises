// Chapter 2 Exercise

//Improved hello: Write a program that asks the user for his first name and his last name. The program then displays them in one sentence.
const firstName = prompt("Enter your first name:");
const lastName = prompt("Enter your last name:");
alert(`Hello, ${firstName} ${lastName}`);

//Final values: Observe the following program and try to predict the final values of its variables.
let a = 2;
a -= 1;
a++;   //a = 2
let b = 8;
b += 2;  //b = 10
const c = a + b * b;  //c = 102
const d = a * b + b;  //d = 30
const e = a * (b + b);  //e = 40
const f = a * b / a;  //f = 10
const g = b / a * a;  // g = 10
console.log(a, b, c, d, e, f, g);  //Result: 2 10 102 30 40 10 10

// VAT calculation: Write a program that asks the user for a raw price. After that, it calculates the corresponding final price using a VAT rate of 20.6%.
let rawPrice = prompt("How much is it?");
let priceVat = Number(rawPrice) / 100 * 20.6;
let totalPrice = Number(rawPrice) + priceVat;
alert(`The final price will be ${totalPrice}`);

//From Celsius to Fahrenheit degrees: Write a program that asks for a temperature in Celsius degrees, then displays it in Fahrenheit degrees.
const celsius = prompt("What's the current temperature in celsius");
const fahrenheit = celsius * 9/5 + 32;
alert(`This is equivalent to a tempaeure of ${fahrenheit} degrees Fahrenheit`);

//Variable swapping
let number1 = 5;
let number2 = 3;
number1 = number2;
// TODO: type your code here (and nowhere else!)
console.log(number1); // Should show 3
number1 = 5;
number2 = number1;
console.log(number2); // Should show 5
