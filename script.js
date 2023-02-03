"use strict";
//take the inputs
function getInputValue(){
    document.querySelector('input#firstnumber').addEventListener('input', updateValue);
    document.querySelector('input#secondnumber').addEventListener('input', updateValue);
    document.querySelector('button#calculate').addEventListener('click', addNumbers);
  
}

function addNumbers() {
    const firstNumber = document.querySelector('input#firstnumber').value;
    const secondNumber = document.querySelector('input#secondnumber').value;
    document.querySelector('input#firstnumber').value = Number(firstNumber) + Number(secondNumber);
    document.querySelector('input#secondnumber').value = " ";

}
getInputValue();


function updateValue(x) {
    console.log(x.target.value);
  }


//   function selectOperator() {
    
//     }

    // const chooseOperator = document.getElementById("operator");
    //  const value = chooseOperator.value;
    //  console.log(value);