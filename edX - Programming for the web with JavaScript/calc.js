/*
 * Implement all your JavaScript in this file!
 */

window.onload = function() {
    $("#display").val("");
}

// Global variables

var currentResult;
var buffer;
var awaitingInput = false;
var currentOperation;
var equalsIsPressed = false;

// Event handlers

$(".button").click(function() {
    if (awaitingInput) {
        if (equalsIsPressed) {
            equalsIsPressed = false;
            currentResult = undefined;
            buffer = undefined;
            currentOperation = undefined;        
        }
        $("#display").val("");
        awaitingInput = false;
    }
    var currentVal = $("#display").val().toString();
    if (currentVal === "0") {
        currentVal = $(this).val();
    } else {
        currentVal += $(this).val();
    }
    $("#display").val(currentVal);
})

$(".operation").click(function(e) {

    if (!$(e.target).is('#equalsButton')) {
        equalsIsPressed = false;
    } 

    // 1. If an operator is clicked immediately after another operator
    if (awaitingInput) {
        if (!equalsIsPressed && $(e.target).is("#equalsButton")) {
            return;
        }
        if (equalsIsPressed && $(e.target).is("#equalsButton")) {
            calculate(currentOperation);
            $("#display").val(currentResult);
            return;
        }
        establishOperation(e);
        return;
    }

    // 2. If an operator is clicked for the first time
    if (!currentOperation) {
        awaitingInput = true;
        currentResult = Number($('#display').val());
        establishOperation(e);
        return;
    }

    // 3. If another operation is chained
    if (currentOperation) {
        if (!equalsIsPressed) {
            buffer = Number($('#display').val());
        }
        calculate(currentOperation);
        $("#display").val(currentResult);
        awaitingInput = true;
        establishOperation(e);
        return;
    }
    
    function establishOperation(e) {
        if ($(e.target).is("#addButton")) {
            currentOperation = "add";
        };
        if ($(e.target).is("#subtractButton")) {
            currentOperation = "subtract";
        };
        if ($(e.target).is("#multiplyButton")) {
            currentOperation = "multiply";
        };
        if ($(e.target).is("#divideButton")) {
            currentOperation = "divide";
        };
        if ($(e.target).is("#equalsButton")) {
            equalsIsPressed = true;
        }
    }
    
})

$('#clearButton').click(function() {
    currentResult = undefined;
    buffer = undefined;
    awaitingInput = false;
    currentOperation = undefined;
    equalsIsPressed = false;
    $("#display").val("");
})

function calculate(currentOperation) {
    if (currentOperation === "add") {
        currentResult += buffer;
    }
    if (currentOperation === "subtract") {
        currentResult -= buffer;
    }
    if (currentOperation === "multiply") {
        currentResult *= buffer;
    }
    if (currentOperation === "divide") {
        currentResult /= buffer;
    }
}