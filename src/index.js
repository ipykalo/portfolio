import "./scss/styles.scss";

function component() {
  const element = document.createElement("div");

  element.innerHTML = "Hello webpack I am Ivan dev js";

  return element;
}

document.body.appendChild(component());
