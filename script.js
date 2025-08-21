function myFunction(){
    var inpValid = document.getElementById("inp1");
    if (!inpValid.checkValidity()){
        document.getElementById("result").innerHTML = inpValid.validationMessage;
    }
    else{
        document.getElementById("result").innerHTML = "Atleast you have a brain to complete this";
    }
}