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
    if(result==""){
        diceNumResult.textContent = "";
        error.textContent = `Please add value`;
        diceImg.setAttribute("src", `sorry.png`);
        error.textContent = `Please choose "CORRECT" options`;
        inputText.value="";
    }
    else if(result<0){
        diceImg.setAttribute("src", `sorry.png`);
        error.textContent = `Please choose "CORRECT" options`;
        inputText.value="";
    }
    else if (result <= 6) {
        diceNumResult.textContent = result;
        diceImg.setAttribute("src", `${result}.svg`);
        error.textContent = "";
        inputText.value="";
      
    }
    else {
        diceNumResult.textContent ="";
        error.textContent = `Please Select Right Options`;
        diceImg.setAttribute("src", `something-went-wrong.png`);
        inputText.value="";
    }
}
