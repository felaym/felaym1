window.onload = function() {

    var firstNum = null;
    var secondNum = null;
    var mathFunc = null;

    const buttons = document.getElementsByClassName("buttons");
    const display = document.getElementById("display");

    buttons[0].addEventListener("click",(e) => { // when you press the button, do "this":

        var value = e.target.textContent;

        if(value == "C") // remove all button
        {
            display.value = "";
            firstNum = null;
            secondNum = null;
            mathFunc = null;
        }
        else if(value == "+")
        {
            mathFunc = value;
            firstNum = parseFloat(display.value);
            display.value = "";
        }
        else if(value == "-")
        {
            mathFunc = value;
            firstNum = parseFloat(display.value);
            display.value = "";
        }
        else if(value == "×")
        {
            mathFunc = value;
            firstNum = parseFloat(display.value);
            display.value = "";
        }
        else if(value == "÷")
        {
            mathFunc = value;
            firstNum = parseFloat(display.value);
            display.value = "";
        }
        else if(value == "²")
        {
            mathFunc = value;
            firstNum = parseFloat(display.value);
            display.value = firstNum * firstNum;
            firstNum = null;
        }
        else if(value == "=") // actions by clicking the equal button:
        {
            if (firstNum !== null && mathFunc !== null) { // you have a number and a math operation chosen, do "this":
                secondNum = parseFloat(display.value);

                if(mathFunc == "+")
                {
                    display.value = firstNum + secondNum;
                }
                else if(mathFunc == "-")
                {
                    display.value = firstNum - secondNum;
                }
                else if(mathFunc == "×")
                {
                    display.value = firstNum * secondNum;
                }
                else if(mathFunc == "÷")
                {
                    display.value = firstNum / secondNum;
                }

                firstNum = null;
                secondNum = null;
                mathFunc = null;
            }
        }
        else {
            display.value += value;
        }

    });
}


