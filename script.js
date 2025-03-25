function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function backspace() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        let expression = document.getElementById("display").value;
        expression = expression.replace(/sin\((.*?)\)/g, "Math.sin($1 * Math.PI / 180)");
        expression = expression.replace(/cos\((.*?)\)/g, "Math.cos($1 * Math.PI / 180)");
        expression = expression.replace(/tan\((.*?)\)/g, "Math.tan($1 * Math.PI / 180)");
        let result = eval(expression);
        document.getElementById("display").value = result;
    } catch {
        document.getElementById("display").value = "Error";
    }
}
