// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Initialize variables
let guess;
let attempts = 0;

// Start the game
alert('Think of a number between 1 and 100. Press OK when you are ready.');

do {
  // Get the user's guess
  guess = parseInt(prompt('Enter your guess:'));

  // Check if the guess is correct
  if (guess === randomNumber) {
    attempts++;
    alert('Congratulations! You guessed the correct number in ' + attempts + ' attempts.');
    break;
  } else if (guess < randomNumber) {
    attempts++;
    alert('Your guess is too low. Try again.');
  } else {
    attempts++;
    alert('Your guess is too high. Try again.');
  }
} while (true);