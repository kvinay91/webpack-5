import "./hello-world-button.css";
class HelloWorldButton {
  rander() {
    const button = document.createElement("button");
    button.innerText = "Hello World";
    button.classList.add("hello-world-button");
    const body = document.querySelector("body");
    button.onclick = () => {
      const p = document.createElement("p");
      p.innerText = "Hello World!";
      p.classList.add("hello-world-text");
      body.appendChild(p);
    };
    body.appendChild(button);
  }
  constructor() {
    document.addEventListener("DOMContentLoaded", () => {
      this.rander();
    });
  }
}
export default HelloWorldButton;
