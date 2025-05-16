let randomNumber = Number(prompt("Guess the Number /n Between 1 and 100"))

let guess = -1;

while (guess !== randomNumber) {

    if (isNaN(randomNumber)) {

        console.log("Invalid input please enter a valid number")

    } else if (guess >= 100 || guess <= 1) {
        console.log("Please Enter a number b/w 1 and 100")
    } else if (guess !== randomNumber) {
        console.log("Try again")
    } else {
        console.log("congrats")
    }


}