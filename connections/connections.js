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
    console.log("selected is", selected, "selectable is ", selectable)
    if (selected.has(word)) {
        selected.delete(word);
        document.getElementById(id).style.backgroundColor = 'lightgray';
        document.getElementById(id).style.color = 'black';
        selectable += 1;
    }
    else if (selectable > 0) {
        selected.set(word);
        document.getElementById(id).style.backgroundColor = 'gray';
        document.getElementById(id).style.color = 'white';
        selectable -= 1;
    }

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