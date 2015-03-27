$(document).ready(function(){
    $("#btnCalculate").on("click",function(){
        var resultForShow = doCalculate($("#firstInput").val(),$("select").find(":selected").val(),$("#secondInput").val());
        if(resultForShow){
            $("#showResult").html('<h3><span class="fui-info-circle"></span> Result = '+ resultForShow +'</h3>')
        }else{
            $("#showResult").html('<h3><span class="fui-cross"></span> Input error!, please check your input.</h3>')
        }
    });
}); 

    function doCalculate(firstInput,operator,secondInput){
        if(validateInput(firstInput,secondInput)){
            return doOperator(firstInput,operator,secondInput);
        }
        return false;
    }
    function validateInput(firstInput,secondInput){
        var firstInputParsed = parseFloat(firstInput);
        var secondInputParsed = parseFloat(firstInput);
        if(isNaN(firstInputParsed)||isNaN(firstInputParsed)||!isFinite(firstInput)||!isFinite(secondInput)){
            return false;
        }
        return true;
    }
    function doOperator(firstInput,operator,secondInput){
        var output;
        switch (operator){
            case "PLUS" :
                output = plus(firstInput,secondInput);
                break;
            case "MINUS" :
                output = minus(firstInput,secondInput);
                break;
            case "MULTIPLY" :
                output = multiply(firstInput,secondInput);
                break;
            case "DIVIDE" :
                output = divide(firstInput,secondInput);
                break;
        }
        return output;
    }
    function plus(firstInput,secondInput){
        return (parseFloat(firstInput)+parseFloat(secondInput));
    }
    function minus(firstInput,secondInput){
        return (parseFloat(firstInput)-parseFloat(secondInput));
    }
    function multiply(firstInput,secondInput){
        return (parseFloat(firstInput)*parseFloat(secondInput));
    }
    function divide(firstInput,secondInput){
        return (parseFloat(firstInput)/parseFloat(secondInput));
    }