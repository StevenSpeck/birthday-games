var board = [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,]

const bagOfWords = [
    "SPECK", "SMITA", "KITTY", "ROBOT", "BIRDS", "BIRTH", "SQUAT", "MIAMI", "AKRON", "TRACK", "HAPPY", "RAMEN", "CASTRO", "HUMAN", "SMILE", "EARTH", "STEVE", "PIZZA"
]

const solution = bagOfWords[Math.floor(Math.random()*bagOfWords.length)]
const solutionArray = [...solution];
const solutionSet = Set(solutionArray);
let currentGuessArray = [];
let wordNumber = 0;
let letterNumber = 0;

function placeLetter(letter) {
    if (currentGuessArray.length < 5) {
        currentGuessArray.push(letter);
        let guessedLetter = document.getElementById(wordNumber*5 + letterNumber)
        guessedLetter.innerText = letter;
        guessedLetter.style.borderColor = "gray";
        letterNumber += 1;
    }
    console.log(currentGuess)
}

function submit() {
    if (currentGuessArray.length === 5) {
        let guessIsCorrectSoFar = true;
        for (let i=0;i<6;i++) {
            let currentBox = document.getElementById(wordNumber*5 + i).style
            if (solutionArray[i] !== currentGuessArray[i]) {
                if (solutionSet.has(currentGuessArray[i])) {
                    currentBox.backgroundColor = "yellow";    
                }
                else {
                    currentBox.backgroundColor = "gray";
                }
                guessIsCorrectSoFar = false;
            }
            else {
                currentBox.backgroundColor = "green";
            }
        }
        if (guessIsCorrectSoFar) {
            document.getElementById("body").style.backgroundColor = "blue";
        }
        wordNumber += 1;
    }
}

function backspace() {
    if (currentGuessArray.length > 0) {
        currentGuessArray.pop()
        letterNumber -= 1;
        document.getElementById(wordNumber*5 + letterNumber).innerText = "";
    }
    console.log(currentGuessArray)
}

// var board = [,,,,,,,,,,,,,,,]
// var score = 0;
// function startGame() {
//     let a = Math.floor(16*Math.random())
//     let b = -1;
//     while (b === -1 || b === a) {
//         b = Math.floor(16*Math.random())

//     }
//     document.getElementById(a).innerText = 2;
//     document.getElementById(b).innerText = 2;
//     board[a] = 2;
//     board[b] = 2;

//     document.getElementById("start").style.display = "none";
// }

// function swipeOnArray(boardIndicesArray) {
//     let boardValues = [...boardIndicesArray].reverse();
//     boardValues = boardIndicesArray.map(index => board[index]).filter(value => value !== undefined);
//     let i = 0;
//     for (let j=1;j<boardValues.length;) {
//         if (boardValues[i] === boardValues[j]) {
//             score += boardValues[i];
//             document.getElementById("status").innerText = score;
//             boardValues[i] *=2;
//             boardValues.pop(j)
//         }
//         i+=1;
//         j+=1;
//     }
//     while (boardValues.length < 4) {
//         boardValues.push(undefined);
//     }
//     // boardValues.reverse()
//     for (let i=0; i<boardValues.length;i++){
//         board[boardIndicesArray[i]] = boardValues[i]
//         document.getElementById(boardIndicesArray[i]).innerText = (boardValues[i] ? boardValues[i] : "");
//     }
// }


// // bugs to fix: 1. when board is not changed, a new number should not be placed on the board 2. numbers are sometimes disapearing?
// // fix: 1. make a version of swipeOnArray that passes tests 2. make a before and after board state check before placing new random number
// // model may not work for making cute animations - representation may have to be different

// // var testBoard = [2,2,0,4]
// // var testIndicies = [0,1,2,3]
// // function swipeTest(boardIndices) {
// //     let boardValues = boardIndicesArray.map(index => testBoard[index]).filter(value => value !== undefined);
// //     let i = 0;
// //     for (let j=1;j<boardValues.length;) {
// //         if (boardValues[i] === boardValues[j]) {
// //             boardValues[i] *=2;
// //             boardValues.pop(j)
// //         }
// //         i+=1;
// //         j+=1;
// //     }
// //     while (boardValues.length < 4) {
// //         boardValues.push(undefined);
// //     }
// //     // boardValues.reverse()
// //     for (let i=0; i<boardValues.length;i++){
// //         board[boardIndicesArray[i]] = boardValues[i]
// //         document.getElementById(boardIndicesArray[i]).innerText = (boardValues[i] ? boardValues[i] : "");
// //     }
// // }
// // console.log(swipeTest(testIndices))







// function swipe(direction) {
//     var vectors = {up:[[0,4,8,12],[1,5,9,13],[2,6,10,14],[3,7,11,15]], down:[[12,8,4,0],[13,9,5,1],[14,10,6,2],[15,11,7,3]], left: [[0,1,2,3],[4,5,6,7],[8,9,10,11],[12,13,14,15]], right: [[15,14,13,12],[11,10,9,8],[7,6,5,4],[3,2,1,0]]};
//     let vector = vectors[direction];
//     for (let i=0;i<vector.length;i++){
//         swipeOnArray(vector[i])
//     }
// }


// function twoOrFour() {
//     return 2+2*Math.floor(2*Math.random())
// }

// function attemptPlacingNewNumber() {
//     let options = []
//     for (let i=0;i<board.length;i++){
//         if (!board[i]) {
//             options.push(i);
//         }
//     }
//     if (options.length === 0) {
//         document.getElementById("status").innerText = "Game Over. No moves left.  Final score: " + score;
//     }
//     else {
//         let selectedPosition = options[Math.floor(options.length * Math.random())];
//         board[selectedPosition] = twoOrFour();
//         document.getElementById(selectedPosition).innerText = board[selectedPosition];
//     }
// }

// window.addEventListener('keydown', event => {
//     if (event.key === "ArrowLeft") {
//         swipe("left");
//     }
//     else if (event.key === "ArrowRight") {
//         swipe("right");
//     }
//     else if (event.key === "ArrowUp") {
//         swipe("up");
//     } 
//     else if (event.key === "ArrowDown") {
//         swipe("down");
//     }
//     attemptPlacingNewNumber();
// })