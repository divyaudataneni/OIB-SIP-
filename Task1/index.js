
const display = document.getElementById('display');
const reuslt = document.getElementById('result');

function addtoDisplay(input){
    display.value += input;
    
}

function cleardisplay() {
    display.value = " ";
    result.textContent = " "
}

function calculate(){
    try{
        result.textContent= eval(display.value);
    }
    catch{
        result.textContent= "Error"
    }  
}

function deletedisplay() {
    display.value = display.value.slice(0,-1)
}