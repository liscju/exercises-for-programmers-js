
/**
 * Connects html elements callbacks.
 */
window.onload = function() {

    var inputStringEl = document.getElementById("string-input");
    var showOccurenceBtnEl = document.getElementById("show-numofchars-btn");

    inputStringEl.onkeyup = calculateNumOfChars;
    showOccurenceBtnEl.onclick = calculateNumOfChars;

    /**
     * Calculates number of characters in input string and shows it
     * to the user.
     */
    function calculateNumOfChars() {
        var inputStr = getInputString();

        if (inputStr === "") {
            clearNumOfChars();
            return;
        }

        var numOfChars = inputStr.length;

        showNumOfChars(inputStr, numOfChars);
    }

    /**
     * Gets string inserted by the user.
     *
     * @returns string inserted by user
     */
    function getInputString() {
        var stringInputEl = document.getElementById("string-input");
        return stringInputEl.value;
    }

    /**
     * Clears num of characters.
     */
    function clearNumOfChars() {
        var numOfCharsEl = document.getElementById("numofchars-textarea");
        numOfCharsEl.value = "";
    }

    /**
     * Shows number of characters for given input string on text area.
     *
     * @param inputStr input string
     * @param numOfChars number of characters
     */
    function showNumOfChars(inputStr, numOfChars) {
        var numOfCharsEl = document.getElementById("numofchars-textarea");
        numOfCharsEl.value = inputStr + " has " + numOfChars + " characters"
    }

};