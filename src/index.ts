import {
  descriptions,
  displaySpeedDescription,
  displaySpeedName,
  name,
} from "./scripts/constnts";

import "./scss/styles.scss";

addEventListener("load", () => {
  showDescription();
  setTimeout(() => switchProfileImage(), getDelay(descriptions));
  setTimeout(() => showName(), getDelay(descriptions));
  setTimeout(() => showMainContent(), getDelay(descriptions));
});

function showDescription(): void {
  const element: HTMLElement = document.getElementById("description");

  for (let i = 0; i < descriptions.length; i++) {
    let text = descriptions[i];
    let index = 0;

    const p: HTMLElement = document.createElement("p");
    element.appendChild(p);

    print(index, displaySpeedDescription, text, p);
    i++;
  }
}

function showName(): void {
  const element: HTMLElement = document.getElementById("name");
  const index = 0;
  print(index, displaySpeedName, name, element);
}

function print(
  index: number,
  speed: number,
  text: string,
  element: HTMLElement
) {
  if (index < text.length) {
    element.innerHTML += text.charAt(index);
    index++;
    setTimeout(() => print(index, speed, text, element), speed);
  }
}

function showMainContent(): void {
  const mainBlock: HTMLElement = document.getElementById("main");
  mainBlock.classList.add("visible");
  mainBlock.classList.remove("invisible");
}

function switchProfileImage(): void {
  const images: NodeListOf<HTMLElement> =
    document.querySelectorAll(".profile_img");

  images.forEach((img: HTMLElement) => {
    const isVisible: boolean = img.classList.contains("visible");

    if (isVisible) {
      img.classList.remove("visible");
      img.classList.add("invisible");
    } else {
      img.classList.remove("invisible");
      img.classList.add("visible");
    }
  });
}

function getDelay(descriptions: Array<string>): number {
  const maxDescription: string = descriptions.reduce((a, b) => {
    return a.length > b.length ? a : b;
  });
  return maxDescription.length * (displaySpeedDescription + 2);
}
