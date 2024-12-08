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

// 1. Додавання класу за допомогою classList.add()
// Створюємо заголовок і додаємо клас для стилізації
const heading = document.createElement('h2');
heading.textContent = 'Це заголовок з класом';
heading.classList.add('main-heading'); // Додаємо клас "main-heading"
container.append(heading); // Додаємо заголовок у контейнер

// 2. Використання classList.toggle() без перевірки
// Створюємо елемент і додаємо клас через toggle
const box = document.createElement('div');
box.textContent = 'Це коробка';
box.classList.add('box'); // Додаємо початковий клас "box"
container.append(box); // Додаємо коробку у контейнер

// 3. Додавання стилів за допомогою властивості style
// Створюємо ще один елемент і задаємо йому стилі через style
const styledBox = document.createElement('div');
styledBox.textContent = 'Стайлінг через style';
styledBox.style.backgroundColor = 'lightblue';
styledBox.style.padding = '10px';
styledBox.style.border = '2px solid blue';
styledBox.style.borderRadius = '5px';
styledBox.style.marginTop = '10px';
container.append(styledBox); // Додаємо стилізовану коробку у контейнер
