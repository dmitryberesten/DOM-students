const container = document.getElementById("output-container");

const heading = document.createElement("h3");
heading.textContent = "Привіт від Кирила!";
heading.style.color = "purple";
container.appendChild(heading);

const btn = document.createElement("button");
btn.style.width = "300px";
btn.style.height = "70px";
btn.textContent = "Натискай";
btn.style.backgroundColor = "black";
btn.style.color = "white";
container.appendChild(btn);