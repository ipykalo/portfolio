import { MATRIX_RAIN_LETTERS } from "./constnts";

const canvas = document.querySelector("canvas");
// Setting the width and height of the canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");
const letters: string[] = MATRIX_RAIN_LETTERS.split("");

// Setting up the columns
const fontSize = 10;
const columns = canvas.width / fontSize;

export function runMatrixRain(): void {
  // Setting the width and height of the canvas
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Setting up the drops
  const drops: any[] = [];

  for (let i = 0; i < columns; i++) {
    drops[i] = 1;
  }

  // Loop the animation
  setInterval(() => draw(ctx, canvas, drops, fontSize, letters), 33);
}

function draw(
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  drops: number[],
  fontSize: number,
  letters: string[]
): void {
  ctx.fillStyle = "rgba(0, 0, 0, .1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < drops.length; i++) {
    let text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillStyle = "#0f0";
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    drops[i]++;

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
      drops[i] = 0;
    }
  }
}
