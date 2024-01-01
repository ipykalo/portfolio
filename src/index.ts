import "./scss/styles.scss";

function component() {
  const element = document.createElement("div");
  const title: string = "Hello webpack I am Ivan Dev";

  element.innerHTML = title;

  return element;
}

document.body.appendChild(component());
