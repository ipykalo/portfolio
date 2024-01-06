const descriptions = [
  `👋 Hello there! I'm a seasoned Software Engineer with over 5 years of
      hands-on experience in crafting web applications.`,
  ,
  `💻 My expertise lies in web development, where I thrive in the HTML,
      CSS, and JavaScript trio. I'm passionate about creating seamless and
      visually appealing user experiences that leave a lasting impression.`,
  ,
  `🅰️ On the front-end, I'm well-versed in the Angular framework,
      employing it to build robust and dynamic user interfaces. I have an
      eye for design and a commitment to delivering responsive and intuitive
      applications.`,
  ,
  `🚀 Beyond the client-side, I've extended my skills to the server
    realm. I have a solid foundation in server-side development using
    technologies like Node.js and NestJS. Databases like MongoDB are my
    playground, where I ensure data integrity and efficiency.`,
  ,
  `🌐 Whether it's shaping the client's journey with a sleek UI or
    orchestrating server-side functionalities, I bring a holistic approach
    to web development. My goal is to create software that not only meets
    technical requirements but also exceeds user expectations.`,
  ,
  `📱 In addition to web applications, I bring valuable experience in
    building mobile applications. I've successfully developed Apps for
    mobile and tablet (Android, IOS, Windows) devices.`,
  ,
  `🌱 Always eager to explore new technologies and methodologies, I stay
    up-to-date with the latest trends in the ever-evolving tech landscape.
    Let's build something extraordinary together! 🚀`,
  ,
];

const name = "My name is Ivan Pykalo";

const displaySpeedDescription = 20; //MS
const displaySpeedName = 100; //MS

const MATRIX_RAIN_LETTERS =
  "ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ";

const MATRIX_RAIN_DROPS_SPEED = 35; //MS
const MATRIX_RAIN_TIME = 30000; //MS

addEventListener("load", () => {
  const canvas = document.querySelector("canvas");
  // Setting the width and height of the canvas
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const ctx = canvas.getContext("2d");
  const letters = MATRIX_RAIN_LETTERS.split("");

  // Setting up the columns
  const fontSize = 10;
  const columns = canvas.width / fontSize;

  function runMatrixRain() {
    // Setting the width and height of the canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Setting up the drops
    const drops = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    const startTime = new Date().getTime();
    // Loop the animation
    const interval = setInterval(() => {
      if (new Date().getTime() - startTime > MATRIX_RAIN_TIME) {
        clearInterval(interval);

        const stopTimeAnimation = new Date().getTime();
        const stopAnimationInterval = setInterval(() => {
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

  function draw(ctx, canvas, drops, fontSize, letters, textColor) {
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

  showDescription();
  setTimeout(() => switchProfileImage(), getDelay(descriptions));
  setTimeout(() => showName(), getDelay(descriptions));
  setTimeout(() => showMainContent(), getDelay(descriptions));
  setTimeout(() => showFooterContent(), getDelay(descriptions));
  setTimeout(() => runMatrixRain(), getDelay(descriptions));
});

function showDescription() {
  const element = document.getElementById("description");

  for (let i = 0; i < descriptions.length; i++) {
    let text = descriptions[i];
    let index = 0;

    const p = document.createElement("p");
    element.appendChild(p);

    print(index, displaySpeedDescription, text, p);
    i++;
  }
}

function showName() {
  const element = document.getElementById("name");
  const index = 0;
  print(index, displaySpeedName, name, element);
}

function print(index, speed, text, element) {
  if (index < text.length) {
    element.innerHTML += text.charAt(index);
    index++;
    setTimeout(() => print(index, speed, text, element), speed);
  }
}

function showMainContent() {
  const mainBlock = document.getElementById("main");
  mainBlock.classList.add("visible");
  mainBlock.classList.remove("invisible");
}

function showFooterContent() {
  const footer = document.getElementById("footer");
  footer.classList.add("visible");
  footer.classList.remove("invisible");
}

function switchProfileImage() {
  const images = document.querySelectorAll(".profile_img");

  images.forEach((img) => {
    const isVisible = img.classList.contains("visible");

    if (isVisible) {
      img.classList.remove("visible");
      img.classList.add("invisible");
    } else {
      img.classList.remove("invisible");
      img.classList.add("visible");
    }
  });
}

function getDelay(descriptions) {
  const maxDescription = descriptions.reduce((a, b) => {
    return a.length > b.length ? a : b;
  });
  return maxDescription.length * (displaySpeedDescription + 2);
}
