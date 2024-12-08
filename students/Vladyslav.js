const container = document.getElementById("output-container");
const header = document.createElement("h4");
button.textContent = "vladyslav buttom";
container.appendChild(button);
header.textContent = "vladyslav buttom";
container.appendChild(header);

const VladyslavHeading = document.createElement('h2');
VladyslavHeading.textContent = 'Це заголовок від Vladyslav'; 
VladyslavHeading.classList.add('main-heading'); 

const container = document.getElementById('container'); 
container.append(VladyslavHeading);

const VladyslavBox = document.createElement('div');
VladyslavBox.textContent = 'Це коробка від Vladyslav';
VladyslavBox.classList.add('box'); 
VladyslavBox.addEventListener('click', () => {
  VladyslavBox.classList.toggle('highlight'); 
});
