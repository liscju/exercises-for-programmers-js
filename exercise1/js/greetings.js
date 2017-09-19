
/**
 * Keycode of the enter.
 *
 * @type {number}
 */
var KBD_ENTER = 13;

/**
 * Initializes callbacks on elements.
 */
window.onload = function() {
    var nameTextEl = document.getElementById("user-name-text");
    var showGreetingBtn = document.getElementById("show-greeting-button");
    nameTextEl.onkeypress = function (evt) {
        if (evt.keyCode === KBD_ENTER) {
            showGreetingBtn.click();
        }
    };
    nameTextEl.focus();
};

/**
 * Shows greetings according to the supplied name in input.
 */
function show_greeting() {
    var name = document.getElementById("user-name-text").value.trim();
    var greeting = chooseGreeting(name);
    var greetingTextEl = document.getElementById("greeting-textarea");
    greetingTextEl.value = greeting;
}

/**
 * Chooses greetings for the supplied name.
 *
 * @param name
 * @returns {string} greeting
 */
function chooseGreeting(name) {
    if (name.toLowerCase() === 'ewa')
        return "Hello DUDE!!!!!!";
    return "Hello " + name + ", nice to meet you!";
}