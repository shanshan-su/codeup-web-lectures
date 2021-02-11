"use strict";

// We are going to have a lecture about loops!

// Are we there yet?

// if (areWeThereYet) {
//     // do some stuff?
// }

// var areWeThereYet;
//
// while (!areWeThereYet) { // is it TRUE we are there yet?
//     areWeThereYet = confirm("Are we there yet?");
// }

// var haveToy = confirm("Can I have the toy please?");
//
// while (!haveToy) {
//     haveToy = confirm("Please?");
// }
//
// if (haveToy) { // until true, we'll never get down here
//     alert("Thanks!! You're the best, can't wait to go outside!");
// }
//
// // refactor away from ! operator
// var waitingForToy = confirm("Are we still waiting for the toy?");
//
// while (waitingForToy) {
//     waitingForToy = confirm("Well, how about now? Are we still waiting?");
// }
//
// if (!waitingForToy) { // until true, we'll never get down here
//     alert("Thanks!! You're the best! I can't wait to go outside!");
// }
//
// var weatherIsMessy = true;
//
// while(weatherIsMessy) {
//     // if true >>> do something
//     alert("Well, let's have some hot chocolate!")
//     weatherIsMessy = confirm("Is it still messy outside?")
// }
//
// alert("Excellent - let's all go outside!")
//
// // Help me create a WHILE loop that runs while X < 10
// var x = 0;
// while ( x < 10) {
//     x++;
//     console.log(x);
// }
//
// x = 10;
// while ( x > 0) {
//     // x--; // x results in 9
//     console.log(--x); //post-decrement? Gonna see 10 first
// }
//
// console.log("Hello, I'm down here! " + x); // results of above
//
// // Let's take our work and put into a FUNCTION definition
// function decrementFromTen(){
//     x = 10;
//     while ( x > 0) {
//         console.log(x--);
//     }
//     return console.log("Hey, I finished counting!");
// }
//
// decrementFromTen();
//
// // How about a function where the user gives us a num
// // then from the num we increment until ten??
// function incrementUntilTen(num) {
//     while (num < 10) {
//         num += 1;
//         console.log(num);
//     }
//     return console.log("Wrapped up counting!");
// }
//
//
// // Now: Let's go one layer deeper - can you tell me how many times my loop has run?
// function incrementUntilTen(num) {
//     var counter = 0;
//     while (num < 10) {
//         num += 1;
//         console.log(num);
//         counter = counter + 1;
//     }
//     return console.log("Wrapped up counting! The loop ran " + counter + " times.");
// }
//
// incrementUntilTen(0);



// do while loop

// do {
//     // code my  do-while loop will run at least once
// } while (condition to check to proceed);

while (false) {
    console.log("Will you ever see me?")
}

do {
    console.log("Will you ever see me in the world of the so-while loop?")
} while (false);
