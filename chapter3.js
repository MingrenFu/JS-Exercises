// Chapter 3 Exercise

//Following day: Write a program that accepts a day name from the user, then shows the name of the following day. Incorrect inputs must be taken into account.
const dayName = prompt("Enter a day of the week");
if (dayName === "monday" || "Monday" || "MONDAY") {
  alert("Tomorrow is Tuesday!");
} else if (dayName === "tuesday" || "Tuesday" || "TUESDAY") {
  alert("Tomorrow is Wednesday");
} else if (dayName === "wednesday" || "Wednesday" || "WEDNESDAY") {
  alert("Tomorrow is Thursday");
} else if (dayName === "thursday" || "Thursday" || "THURSDAY") {
  alert("Tomorrow is Friday");
} else if (dayName === "friday" || "Friday" || "FRIDAY") {
  alert("Tomorrow is Saturday");
} else if (dayName === "saturday" || "Saturday" || "SATURDAY") {
  alert("Tomorrow is Sunday");
} else if (dayName === "sunday" || "Sunday" || "SUNDAY") {
  alert("Tomorrow is Monday");
} else {
  alert("Not a valid day name. Please enter the day name in the form of word");
}
