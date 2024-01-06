import {
  MATRIX_RAIN_DROPS_SPEED,
  MATRIX_RAIN_LETTERS,
  MATRIX_RAIN_TIME,
} from "./constnts";

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

  const startTime = new Date().getTime();
  // Loop the animation
  const interval = setInterval((): void => {
    if (new Date().getTime() - startTime > MATRIX_RAIN_TIME) {
      clearInterval(interval);

      const stopTimeAnimation = new Date().getTime();
      const stopAnimationInterval = setInterval((): void => {
        if (new Date().getTime() - stopTimeAnimation > MATRIX_RAIN_TIME) {
          clearInterval(stopAnimationInterval);
          return;
        }
        draw(ctx, canvas, drops, fontSize, letters, "#000");
      }, MATRIX_RAIN_DROPS_SPEED);
      return;
    }
    draw(ctx, canvas, drops, fontSize, letters, "#0f0");
  }, MATRIX_RAIN_DROPS_SPEED);
}

function draw(
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  drops: number[],
  fontSize: number,
  letters: string[],
  textColor: string
): void {
  ctx.fillStyle = "rgba(0, 0, 0, .1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < drops.length; i++) {
    const MAGIC_NUMBER = 0.95;
    let text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillStyle = textColor;
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    drops[i]++;

    if (drops[i] * fontSize > canvas.height && Math.random() > MAGIC_NUMBER) {
      drops[i] = 0;
    }
  }
}
