// Chapter 4 Exercise

// Carousel: Write a program that launches a carousel for 10 turns, showing the turn number each time. When it's done, improve it so that the number of turns is given by the user.
let number = 1;
while (number <= 10) {
	alert(number);
  	number++;
}
number = 1
let numberTurns = Number(prompt("Please enter your desire number of turns"));
while (number <= numberTurns) {
	alert(number);
  	number++;
}
