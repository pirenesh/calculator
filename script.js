function appendValue(value){
    document.getElementById("display").value += value;
}

function clearDisplay(){
    document.getElementById("display").value = "";
}

function deleteLast(){
    let display = document.getElementById("display");
    display.value = display.value.slice(0,-1);
}

function calculate(){

    try{

        let expression =
        document.getElementById("display").value;

        expression =
        expression.replace(/%/g,"/100");

        let result = eval(expression);

        document.getElementById("display").value = result;

    }catch{

        document.getElementById("display").value = "Error";
    }
}

function calculateLog(){

    let value =
    document.getElementById("display").value;

    if(value !== ""){

        let result =
        Math.log10(Number(value));

        document.getElementById("display").value =
        result;
    }
}