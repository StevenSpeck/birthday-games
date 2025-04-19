var board = [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,]

const bagOfWords = [
    "SPECK", "SMITA", "KITTY", "ROBOT", "BIRDS", "BIRTH", "SQUAT", "MIAMI", "AKRON", "TRACK", "HAPPY", "RAMEN", "HUMAN", "SMILE", "EARTH", "STEVE", "PIZZA", "YAPPY", "ATOMS"
]

const solution = bagOfWords[Math.floor(Math.random()*bagOfWords.length)]
const solutionArray = [...solution];
const solutionSet = new Set(solutionArray);
let currentGuessArray = [];
let wordNumber = 0;
let letterNumber = 0;

document.addEventListener('keydown', function(event) {
    let key = event.key;
    if ("abcdefghijklmnopqrstuvwxyz".includes(key)) {
        placeLetter(key.toUpperCase())
    }
    else if (key === "Backspace") {
        backspace();
    }
    else if (key === "Enter") {
        submit();
    } 
});

function placeLetter(letter) {
    if (currentGuessArray.length < 5) {
        currentGuessArray.push(letter);
        let guessedLetter = document.getElementById(wordNumber*5 + letterNumber)
        guessedLetter.innerText = letter;
        guessedLetter.style.borderColor = "#787C7E";
        guessedLetter.style.animation = "shake 0.1s";

        letterNumber += 1;
    }
}

function submit() {
    if (currentGuessArray.length === 5) {
        let guessIsCorrectSoFar = true;
        for (let i=0;i<5;i++) {
            let currentBox = document.getElementById(wordNumber*5 + i).style;
            let currentKey = document.getElementById(currentGuessArray[i]).style;
            currentBox.animation = "flip " + (.5*i).toString() + "s";
            currentBox.color = "white";
            currentKey.color = "white";
            if (solutionArray[i] !== currentGuessArray[i]) {
                if (solutionSet.has(currentGuessArray[i])) {
                    currentBox.backgroundColor = "#C9B458";
                    currentBox.borderColor = "#C9B458";
                    currentKey.backgroundColor = (currentKey.backgroundColor === "#6AAA64" ? "#6AAA64" : "#C9B458");   
                }
                else {
                    currentBox.backgroundColor = "#787C7E";
                    currentBox.borderColor = "#787C7E";
                    currentKey.backgroundColor = "#787C7E";
                }
                guessIsCorrectSoFar = false;
            }
            else {
                currentBox.backgroundColor = "#6AAA64";
                currentBox.borderColor = "#6AAA64";
                currentKey.backgroundColor = "#6AAA64";
            }
        }
        if (guessIsCorrectSoFar) {
            // document.getElementById("body").style.backgroundColor = "blue";
            document.querySelectorAll(".guesses")[0].style.animation = "violentShake 60s";
            document.getElementById("header").innerText = "you fucking won, Go Back to Games Menu?"
            wordNumber = 10;
        }
        currentGuessArray = [];
        wordNumber += 1;
        letterNumber = 0;
        if (wordNumber === 6) {
            document.getElementById("header").innerText = "you fucking lost, Go Back to Games Menu. by the way it was "+solution;
            // document.getElementById("body").style.backgroundColor = "red";

        }
    }
}

function backspace() {
    if (currentGuessArray.length > 0) {
        currentGuessArray.pop()
        letterNumber -= 1;
        let removedLetter = document.getElementById(wordNumber*5 + letterNumber);
        removedLetter.innerText = "";
        removedLetter.style.borderColor = "#D3D6DA";
    }
}