const container = document.getElementById("output-container");

// Створення елемента
const heading = document.createElement("h2");
heading.textContent = "Привіт від student1!";
container.appendChild(heading);

// Додавання зображення
const image = document.createElement("img");
image.src =
  "https://images.squarespace-cdn.com/content/v1/524883b7e4b03fcb7c64e24c/1685041480038-AWYM7XXSYNHG53PL43L6/Squarespace+Favicon.jpg?format=1500w";
image.alt = "Приклад зображення";
image.width = "300";
container.appendChild(image);
