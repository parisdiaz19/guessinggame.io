//Game Values

let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;


//UI Elements
const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#textarea1'),
    message = document.querySelector('#message');


//Assign UI min and Max
minNum.textContent = min;
maxNum.textContent = max;

//Event Listeners for Button
guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);

    //Validation
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

    //Check Winning Number
    if(guess === winningNum){

        gameOver(true, `${winningNum} is correct!, YOU WIN!`);
       
    } else {
        //Wrong Number
        guessesLeft -= 1;

        if(guessesLeft === 0){
         //Game Over 
            gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`);
        } else {
           //Game Continue w/ wrong answer
          //Change Border Color
          guessInput.style.borderColor = 'red';
          //Clear Input
          guessInput.value = '';
          setMessage(`${guess} is not correct, ${guessesLeft} guesses remaining`);
        }
    }
});

//Game Over FUnction
function gameOver(won, msg){
    let color;
    won === true ? color = 'green' : color = 'red';

    //Disable input
    guessInput.disabled = true;
    //Change Border Color
    guessInput.style.borderColor = color;
    //set Text Color
    message.style.color = color;
    //Set Message
    setMessage(msg);

    //Play Again?
    //guessBtn.value = 'Play Again';
    //guessBtn.className += 'play-again';
}

//Set Message Function
function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}