console.log(`This is my smart quiz app with analysis`)

//window.alert(`alert sample`)

document.getElementById("submitButton").onclick = function(){
    let name = document.getElementById("userName").value
    //window.alert(`Hello ${name}!`)
    console.log(`Hello ${name}`)
    document.getElementById(`answer`).textContent = `Hello ${name}!`
}

//Counter Function
const decrementButton = document.getElementById("decrement")
const incrementButton = document.getElementById("increment")
const changeNumberButton = document.getElementById("changeNumberValue")
const resetButton = document.getElementById("resetButton")

const numberValue = document.getElementById("number")
const newNumberValue = document.getElementById('numberValue')
let number=1;

//decrement function
decrementButton.onclick = function(){
   let n = Number(numberValue.textContent)
   numberValue.textContent = n-= number
}

//increment
// incrementButton.onclick = function(){
//    let n = Number(numberValue.textContent)
//    numberValue.textContent = n+=number
// }

incrementButton.onclick = () =>{
    let n = Number(numberValue.textContent)
    numberValue.textContent = n+=number
}
//change number value
changeNumberButton.onclick = function(){
    number = Number(newNumberValue.value)
    console.log(`the number is now ${number}`)
}

//reset button
resetButton.onclick = function(){
    numberValue.textContent = 0
}


//Simple Age Inspection
const ageSubmitButton = document.getElementById("ageSubmitButton");
let result = document.getElementById('result')

ageSubmitButton.onclick = function(){
    let age = Number(document.getElementById("age").value);
    if(age == 0 || age == null){
        result.textContent = "Enter a valid age number";
        console.log(age)
        return;
    };
    if(age < 18){
        result.textContent = `You are under 18 and too young for this`;
    }else{
        result.textContent = `You are over 18, hello world.`;
    };
};

//Number Guessing Game
const gamePanel = document.getElementById("menuPanel")
const messageDiv = document.getElementById(`messageDiv`)

const guessNumber = document.getElementById(`guessNumber`)
const messageBox = document.getElementById(`numberGuessingGameMessageBox`)

const guessNumberSubmitBtn = document.getElementById(`numberGuessingSubmitButton`)
const startBtn = document.getElementById('startButton')
const guessNumberResetBtn = document.getElementById(`numberGuessingResetButton`)
const guessNumberExitBtn = document.getElementById(`numberGuessingExitButton`)

let generatedNumber;
let userInputNumber;

startBtn.onclick = () =>{
    messageDiv.style.display = "none";
    gamePanel.style.display = "flex";
    generatedNumber = Math.floor(Math.random()*100+1);
    console.log(`the generated number is ${generatedNumber}`)
};

guessNumberSubmitBtn.onclick = () =>{
    if (isNaN(Number(guessNumber.value))){
        messageBox.textContent = `Only valid numbers are accepted.`;
    }else{
        userInputNumber = parseInt(guessNumber.value);
        
        if(generatedNumber > userInputNumber){
            messageBox.textContent = `Your number is lesser than the target.`
        }else if (generatedNumber< userInputNumber){
            messageBox.textContent = `Your number is greater than the target.`
        }else{
            messageBox.textContent = `You guessed the number! the number is ${generatedNumber}`
        };
    };
};

guessNumberResetBtn.onclick = () =>{
    generatedNumber = Math.floor(Math.random()*100+1);
    console.log(`the new generated number is ${generatedNumber}`)
    messageBox.textContent = `A new number is generated, try to guess!`
};

guessNumberExitBtn.onclick = () =>{
    gamePanel.style.display = `none`
    messageDiv.style.display = `block`
};









