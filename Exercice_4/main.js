const lastname = document.getElementById("lastname");
const firstname = document.getElementById("firstname");
const city = document.getElementById("city");
const button = document.querySelector("button");

button.addEventListener("click", resetData);

function resetData() {
    lastname.value = "";
    firstname.value = "";
    city.value = "";
}