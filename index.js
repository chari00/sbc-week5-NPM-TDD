const screenDisplay = document.getElementById('screen');


//add functionality that check if the user input is not a number => return error
//implement the readonly property in the input and create a functionality
//that let the user use the keyboard keys when using desktop/computer

const displayToScreen = (input)=>{
    screenDisplay.value += input

}

const clearScreen = ()=>{
    screenDisplay.value = '';
}

const calculate = ()=>{
    try{
        screenDisplay.value = eval(screenDisplay.value);
       
    }
    catch(error){
        screenDisplay.value = 'Error'
    }
}

