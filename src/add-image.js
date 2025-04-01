import Fruit from "./fruit.jpg";
function addImage() {
  console.log("inside the addImage!");
  const img = document.createElement("img");
  img.src = Fruit;
  img.width = 300;
  img.alt = "Fruits";
  img.classList.add("image");
  const body = document.querySelector("body");
  body.appendChild(img);
}
document.addEventListener("DOMContentLoaded", () => {
  addImage();
});
export default addImage;
