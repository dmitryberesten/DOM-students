const container = document.getElementById("output-container");
const button = document.createElement("button");
button.textContent = "скачати торент";
container.appendChild(button);

const image = document.createElement("img");
image.src =
  "https://i.pinimg.com/originals/3e/7b/e5/3e7be57af6b390b2856dee1753c5a47b.jpg";
image.alt = "Приклад зображення";
image.width = "300";
container.appendChild(image);