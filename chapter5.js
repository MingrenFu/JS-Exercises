// Chapter 5 Exercise

//Improved Hello: Complete the following program so that it asks the user for his first and last names, then show the result of the sayHello() function.
// TODO: ask user for first and last name
const firstName = prompt("Enter your first name:");
const lastName = prompt("Enter your last name:");
// TODO: call sayHello() and show its result
console.log(sayHello(firstName, lastName));
alert(sayHello(firstName, lastName));
// Say hello to the user
function sayHello(firstName, lastName) {
  const message = `Hello, ${firstName} ${lastName}!`;
  return message;
}
