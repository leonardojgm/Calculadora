var display = document.querySelector('#display');

function showDisplay(value) {
    if (display.value == "" && value == ".") {
        display.value = 0;
    }

    display.value += value;
}

function clearAll() {
    display.value = "";
}

function result() {
    let result = eval(display.value);

    display.value = result;

    if (display.value == "Infinity") {
        display.value = "0";
    }

    if (display.value == "undefined") {
        display.value = "";
    }
}