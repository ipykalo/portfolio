import { descriptions } from "./scripts/constnts";
import "./scss/styles.scss";

addEventListener("load", () => {
  const article = document.getElementById("description");

  for (let i = 0; i < descriptions.length; i++) {
    let text = descriptions[i];
    let l = 0;
    var speed = 20;
    const p = document.createElement("p");
    article.appendChild(p);

    print(l, speed, text, p);
    i++;
  }

  function print(i: number, speed: number, text: string, element: HTMLElement) {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(() => print(i, speed, text, element), speed);
    }
  }
});
