function myFunction(){
    var inpValid = document.getElementById("inp1");
    if (!inpValid.checkValidity()){
        document.getElementById("result1").innerHTML = inpValid.validationMessage;
    }
    else{
        document.getElementById("result1").innerHTML = "Atleast you have a brain to complete this";
    }
}

const display = document.getElementById("result");

function setScreenValue(value){
    display.value += value;
}

function clearScreen(){
    display.value = "";
}

function calculateResult(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error Detected";
    }
}