"use strict";
//take the inputs
function getInputValue(){
    document.querySelector('input#firstnumber').addEventListener('input', updateValue);
    document.querySelector('input#secondnumber').addEventListener('input', updateValue);
    document.querySelector('button#calculate').addEventListener('click', makeOperation);
  
}

function makeOperation() {
    const firstNumber = document.querySelector('input#firstnumber').value;
    const secondNumber = document.querySelector('input#secondnumber').value;
    // read operator from a drop down
    const chosenOperator = document.getElementById("operator");
    const value = chosenOperator.value;
    const newListNumber = document.createElement("li");
    console.log(value);
    // regarding the append: there is probably a better way to do that. it's too long and redundant
    if (value === "add"){
        document.querySelector("input#firstnumber").value =  Number(firstNumber) + Number(secondNumber);
        document.querySelector("ul#results").appendChild(newListNumber).textContent =  Number(firstNumber) + Number(secondNumber);
    }
    else if (value === "sub"){
        document.querySelector("input#firstnumber").value =  Number(firstNumber) - Number(secondNumber);
        document.querySelector("ul#results").appendChild(newListNumber).textContent =  Number(firstNumber) - Number(secondNumber);
    }
    else if (value === "mul"){
        document.querySelector("input#firstnumber").value =  Number(firstNumber) * Number(secondNumber);
        document.querySelector("ul#results").appendChild(newListNumber).textContent =  Number(firstNumber) * Number(secondNumber);
    } else { document.querySelector("input#firstnumber").value =  Number(firstNumber) / Number(secondNumber);
    document.querySelector("ul#results").appendChild(newListNumber).textContent =  Number(firstNumber) / Number(secondNumber);}
    document.querySelector('input#secondnumber').value = "";

    
}
getInputValue();


function updateValue(x) {
    console.log(x.target.value);
  }


  