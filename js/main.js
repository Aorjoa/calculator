$(document).ready(function(){
    $("#btnCalculate").on("click",function(){
        doCalculate($("#firstInput").val(),$("#secondInput").val());
    });
}); 

    function doCalculate(firstInput,operator,secondInput){
        if(validateInput(this.firstInput,this.secondInput)){
            console.log(this.firstInput);
            doOperator(this.firstInput,operator,this.secondInput);
            return true;
        }
        return false;
    }
    function validateInput(firstInput,secondInput){
        var firstInputParsed = parseFloat(this.firstInput);
        var secondInputParsed = parseFloat(this.firstInput);
        if(isNaN(firstInputParsed)||isNaN(firstInputParsed)||!isFinite(this.firstInput)||!isFinite(this.secondInput)){
            return false;
        }
        return true;
    }
    function doOperator(firstInput,operator,secondInput){
        var output;
        switch (operator){
            case "PLUS" :
                output = plus(this.firstInput,this.secondInput);
                break;
            case "MINUS" :
                output = minus(this.firstInput,this.secondInput);
                break;
            case "MULTIPLY" :
                output = multiply(this.firstInput,this.secondInput);
                break;
            case "DIVIDE" :
                output = divide(this.firstInput,this.secondInput);
                break;
        }
        return output;
    }
    function plus(firstInput,secondInput){
        console.log(">>>> "+ firstInput+secondInput)
        return this.firstInput+this.secondInput;
    }
    function minus(firstInput,secondInput){

    }
    function multiply(firstInput,secondInput){

    }
    function divide(firstInput,secondInput){

    }