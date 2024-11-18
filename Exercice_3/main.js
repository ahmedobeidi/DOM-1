let input = document.getElementById("lastname");

input.addEventListener('keyup', handleKeyUp);

function handleKeyUp() {
    console.log(input.value);
}