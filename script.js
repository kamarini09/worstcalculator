"use strict";
//take the inputs
function getInputValue(){
    document.querySelector('input#firstnumber').addEventListener('input', updateValue);
    document.querySelector('input#secondnumber').addEventListener('input', updateValue);
    document.querySelector('button#calculate').addEventListener('click', makeOperation);
  
}

function makeOperation() {
    const firstNumber = Number(document.querySelector('input#firstnumber').value);
    const secondNumber = Number(document.querySelector('input#secondnumber').value);
    // read operator from a drop down
    const chosenOperator = document.getElementById("operator");
    const value = chosenOperator.value;
    const newListNumber = document.createElement("li");
    console.log(value);
    let result = "unused value";
    const round = document.querySelector('#doround');
    console.log(round.checked);
    
    const roundOption = document.getElementById("decimals");
    const optionValue = roundOption.value;
    // regarding the append: there is probably a better way to do that. it's too long and redundant
    if (value === "add"){
        result = firstNumber + secondNumber; 
    }
    else if (value === "sub"){
        result = firstNumber - secondNumber;
    }
    else if (value === "mul"){
        result = firstNumber * secondNumber;  
    } else { 
        result = firstNumber / secondNumber;
    }

    if (round.checked) {
        result = result.toFixed(optionValue);
        console.log(result);
    }
    
    document.querySelector("input#firstnumber").value =  result;
    document.querySelector("ul#results").appendChild(newListNumber).textContent = result;
    newListNumber.scrollIntoView();
    // document.querySelector('input#secondnumber').value = ""; 
}
getInputValue();


document.querySelector("p#clear").addEventListener('click', clearResults);

//this function is deleting all childeren of the ul but i dont want the first 4 to be deleted
function clearResults(){
    const clear = document.querySelector("ul#results");
    while(clear.firstChild) {
        clear.removeChild(clear.firstChild);
    }
}

//with this way the 4 zeros are staying there/ but probably is wrong from when i appended the result
//because it add li and not replace the first ones
// function clearResults(){
//         const clear = document.querySelector("ul#results");
//         let n = clear.children.length
//         for (let i = 4; i< n; i++) {
//             console.log(clear.lastElementChild)
//             clear.removeChild(clear.lastElementChild);
                
//             }
//         }
    



function updateValue(x) {
    console.log(x.target.value);
  }
    
// old one
// function makeOperation() {
//     const firstNumber =document.querySelector('input#firstnumber').value;
//     const secondNumber = document.querySelector('input#secondnumber').value;
//     // read operator from a drop down
//     const chosenOperator = document.getElementById("operator");
//     const value = chosenOperator.value;
//     const newListNumber = document.createElement("li");
//     console.log(value);
    
//     // regarding the append: there is probably a better way to do that. it's too long and redundant
//     if (value === "add"){
        
//         // document.querySelector("input#firstnumber").value =  Number(firstNumber) + Number(secondNumber);
//         // document.querySelector("ul#results").appendChild(newListNumber).textContent =  Number(firstNumber) + Number(secondNumber);
//     }
//     else if (value === "sub"){
        
//         // document.querySelector("input#firstnumber").value =  Number(firstNumber) - Number(secondNumber);
//         // document.querySelector("ul#results").appendChild(newListNumber).textContent =  Number(firstNumber) - Number(secondNumber);
//     }
//     else if (value === "mul"){
        
//         // document.querySelector("input#firstnumber").value =  Number(firstNumber) * Number(secondNumber);
//         // document.querySelector("ul#results").appendChild(newListNumber).textContent =  Number(firstNumber) * Number(secondNumber);
//     } else { 
      
//     //     document.querySelector("input#firstnumber").value =  Number(firstNumber) / Number(secondNumber);
//     // document.querySelector("ul#results").appendChild(newListNumber).textContent =  Number(firstNumber) / Number(secondNumber);}

   
//     document.querySelector('input#secondnumber').value = "";

    
// }



  