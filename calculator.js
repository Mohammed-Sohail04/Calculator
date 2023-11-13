let input = document.getElementById('inputBox');

//with querySelectorAll we are selecting all buttons
let buttons = document.querySelectorAll('button'); // 'button' -- is a variable


let string = '';  // here we are taking empty string to store the result.

//we need all buttons so lets create an array for buttons
let arr = Array.from(buttons);// Array is a function

arr.forEach(button => {  //we create forEach loop here,it doesn't work on buttons but on array.
    button.addEventListener('click', (e) =>{  //to display the value we took addEventListener
        if(e.target.innerHTML == '='){
            string = eval(string); // eval is a function in js whatever may be in the string it will evaluate.
            input.value = string;
        }

        else if(e.target.innerHTML == 'AC'){ // when clicking on AC text will be 0
            string = "";
            input.value = string; // we show string value in input tag
        }

        else if(e.target.innerHTML == 'DEL'){ // by clicking on DEL it will delete the last digit
            string = string.substring(0, string.length-1);
            input.value = string;
        }

        else{ // it makes the value 0 when click on AC
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})
