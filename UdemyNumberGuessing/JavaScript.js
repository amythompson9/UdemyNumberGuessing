//create seecret number
var secretNumber = 4;

//ask user for guess
var guess = prompt("What is the secret number?");

//check if guess is right
//this won't work because you need a number, but are getting a string
//if (guess === secretNumber) {
//    alert("YOU GOT IT RIGHT!!")
//}

if (Number(guess) === secretNumber) {
    alert("YOU GOT IT RIGHT!!")
}

//else {
//    alert("Wrong.")
//}

else if (Number(guess) > secretNumber) {
    alert("Too high. Guess again!")
}

else if (Number(guess) < secretNumber) {
    alert("Too low. Guess again!")
}

else {
    alert("Not a number.")
}