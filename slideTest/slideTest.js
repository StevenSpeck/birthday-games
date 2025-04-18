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
let board = [,,,,,,,,,,,,,,,,]

const positions = {
    "vertical":{
        0: "-24rem",
        1: "-18.5rem",
        2: "-13rem",
        3: "-7.5rem" //margin-top
    },
    "horizontal": {
        0:"-11.5rem",
        1: "-5.5rem",
        2: "6rem",
        3: "18rem" //margin-left:
    }
};

function moveAtoB(locA, locB) {
    let aVal = board[locA], bVal = board[locB];
    //do nothing if A is empty, or B exists and is bigger than A
    //move A to B if B is empty
    //move A to B and transform into 2*A if A === B
}



function swipe(direction) {
    if ("left") {
        document.getElementById("0").style.marginLeft = "-11.5rem";
    }
    else if ("right") {
        document.getElementById("0").style.marginLeft = "18rem";
    }
    else if ("up") {
        document.getElementById("0").style.marginTop = "-24rem";
    }
    else if ("down") {
        document.getElementById("0").style.marginTop = "-7.5rem";
    }
}   

window.addEventListener('keydown', event => {
    if (event.key === "ArrowLeft") {
        swipe("left");
    }
    else if (event.key === "ArrowRight") {
        swipe("right");
    }
    else if (event.key === "ArrowUp") {
        swipe("up");
    } 
    else if (event.key === "ArrowDown") {
        swipe("down");
    }
    attemptPlacingNewNumber();
})