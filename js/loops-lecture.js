"use strict";

// We are going to have a lecture about loops!

// Are we there yet?

var onTheRoad = true;

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

// Help me create a WHILE loop that runs while X < 10
var x = 0;
while ( x < 10) {
    x++;
    console.log(x);
}

x = 10;
while ( x > 0) {
    // x--; // x results in 9
    console.log(--x); //post-decrement? Gonna see 10 first
}

