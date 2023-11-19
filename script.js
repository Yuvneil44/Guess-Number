let secretNumber = Math.floor(Math.random() * 100) + 1; // Generate a random number between 1 and 100

function checkGuess() {
    let guessInput = document.getElementById('guessInput');
    let guess = parseInt(guessInput.value);
    let feedbackElement = document.getElementById('feedback');

    if (guess === secretNumber) {
        feedbackElement.textContent = 'Yahoooo! You guessed the secret number!';
    } else if (guess > secretNumber) {
        feedbackElement.textContent = 'Your guess is too high.';
    } else {
        feedbackElement.textContent = 'Your guess is too low.';
    }
}
