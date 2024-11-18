const input = document.getElementById("lastname");

input.addEventListener("focusout", handleInputOnFoucsOut);

function handleInputOnFoucsOut() {
    alert("Merci de votre participation");
}