const div = document.getElementById('change-div');
const button = document.getElementById('change-button');
const input = document.getElementById('change-input');

console.log(input);

// why do I need the button?
// because we don't want the code to run UNTIL they click
// that's why we add an event listener to the button.
button.addEventListener('click', () => {
    // what do we want to happen on click?
    // we want to to change the text displayed in the div
    // we need to get the value of the input (i.e., whatever the user typed)
    const userTyped = input.value;
    // then we set it to the textContent of the div
    div.textContent = userTyped;
});
