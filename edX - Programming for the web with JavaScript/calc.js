/*
 * Implement all your JavaScript in this file!
 */

window.onload = (() => $("#display").val(""));

// Global variables

let currentResult;

// Event handlers

$(".button").click(function() {
    let currentVal = $("#display").val().toString();
    if (currentVal === "0") {
        currentVal = $(this).val();
    } else {
        currentVal += $(this).val();
    }
    $("#display").val(currentVal);
})

