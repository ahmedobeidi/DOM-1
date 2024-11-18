const image = document.getElementById("image");

image.addEventListener("mouseover", handleImageOnHover1);
image.addEventListener("mouseout", handleImageOnHover2);

function handleImageOnHover1() {
    image.src = "images/image1_2.jpg";
}

function handleImageOnHover2() {
    image.src = "images/image1.jpg";
}