// const selectedWordGroups = {
//     "4 20":["Birthday","Weed","Hitle","80"],
//     "Parents":["Sambit","Ellen","Tuhino","Samuel"],
//     "Foster Cats":["Ariel","Onyx","Willow",""],
//     "Desserts":["Cookies","Cake","Boba","Ice Cream"]
// }

let selectable = 4;
let selected = new Map();
const selectedWordGroups = [
    ["Birthday","Weed","Hitle","80"],
    ["Sambit","Ellen","Tuhino","Samuel"],
    ["Ariel","Onyx","Willow",""],
    ["Cookies","Cake","Boba","Ice Cream"]
]

function selectWord(id) {
    let word = document.getElementById(id).innerText;
    if (selected.has(word)) {
        selected.delete(word);
        document.getElementById(id).style.backgroundColor = 'lightgray';
        document.getElementById(id).style.color = 'black';
        selectable += 1;
    }
    else if (selectable > 0) {
        selected.set(word, id);
        document.getElementById(id).style.backgroundColor = 'gray';
        document.getElementById(id).style.color = 'white';
        selectable -= 1;
    }
    buttonChecks()
}

function deselect() {
    selectable = 4;
    selected.forEach((value, key) => {
        let word = document.getElementById(value);
        word.style.color = 'black';
        word.style.backgroundColor = 'lightgray';
    });
    selected = new Map();
    buttonChecks()
}

function buttonChecks() {
    let submit = document.getElementById("submit");
    if (selectable === 0) {
        submit.style.backgroundColor = "black";
        submit.style.color = "white";
    }
    else {
        submit.style.backgroundColor = "white";
        submit.style.color = "black";
        // submit.disable
    }

    let deselect = document.getElementById("deselect all");
    if (selectable < 4) {
        deselect.style.backgroundColor = "black";
        deselect.style.color = "white"; 
    }
    else {
        deselect.style.backgroundColor = "white";
        deselect.style.color = "black";
        // submit.disable
    }
}


const wordToGroup = new Map();
for (let i=0;i<4;i++) {
    for (let j=0;j<4;j++) {
        wordToGroup[selectedWordGroups[i][j]] = [selectedWordGroups[i]]
    }
}

function submit() {
    let isAGroup = True;
    for
    if (true) {
        //empty selected
        //remove row
        //rearrange remaining words
        //win condition
    }
    else {
        //penalty
        //shaking
    }
}