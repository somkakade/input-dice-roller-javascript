// Program

// Selectors

const inputText = document.querySelector("#inputText");
const diceBtn = document.querySelector("#diceBtn");
const diceNumResult = document.querySelector("#diceNumResult");
const diceImg = document.querySelector("#diceImg");
const error = document.querySelector("#error");
let result;

// Event


diceBtn.onclick = function () {
    result = Number(inputText.value);
    if (result <= 6) {
        diceNumResult.textContent = result;
        diceImg.setAttribute("src",`${result}.svg`);
    }
    // else if(result>=6){
    //     diceNumResult.textContent = `Something went wrong`;
    //     diceImg.setAttribute("src",``);
    // }
    else {
        error.textContent = `Please Select Right Options`
    }
}
