//Case#1
var desc = "Case 1 : Have 2 input elements with type text";
if($("input[type='text']").length == 2){
    console.log(desc+ " : PASS");
}else{
        console.log(desc+ " : FAIL!");
}

//Case#2
var desc = "Case 2 : Have 1 select box for operator";
if($("select").length == 1){
    console.log(desc+ " : PASS");
}else{
    console.log(desc+ " : FAIL!");
}

//Case#3
var desc = "Case 3 : Operator option can be PLUS, MINUS, MULTIPLY, DIVIDE only";
var operatorAvailable = ["PLUS","MINUS","MULTIPLY","DIVIDE"];
var operatorActual = $("select > option");
var checkContain = true;
for(var operatorElementIndex=0;operatorElementIndex<operatorActual.length;operatorElementIndex++){
    if($.inArray(operatorActual[operatorElementIndex].value,operatorAvailable) == -1){
        checkContain = false;
        break;
    }
}

if(checkContain){
    console.log(desc+ " : PASS");
}else{
    console.log(desc+ " : FAIL!");
}


//Case#4
var desc = "Case 4 : If give NaN input process not calculate";
if(!doCalculate("2n","PLUS","2")){
    console.log(desc+ " : PASS");
}else{
    console.log(desc+ " : FAIL!");
}

//Case#5
var desc = "Case 5 : If give number as input process will be calculate";
if(doCalculate("50","PLUS","2")){
    console.log(desc+ " : PASS");
}else{
    console.log(desc+ " : FAIL!");
}

//Case#6
var desc = "Case 5 : 2+5 = 7";
if(doCalculate("2","PLUS","5")){
    console.log(desc+ " : PASS");
}else{
    console.log(desc+ " : FAIL!");
}

