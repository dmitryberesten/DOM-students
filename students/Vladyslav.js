const container = document.getElementById("output-container");
const VladyslavHeading1 = document.createElement("h2");
VladyslavHeading1.textContent = "Привіт від Vladyslav!";
container.appendChild(VladyslavHeading1);
const VladyslavHeading2 = document.createElement("h2");
VladyslavHeading2.textContent = "Це заголовок з класом";
VladyslavHeading2.classList.add("main-heading"); 
container.appendChild(VladyslavHeading2);
const VladyslavBox = document.createElement("div");
VladyslavBox.textContent = "Це коробка від Vladyslav";
VladyslavBox.classList.add("box"); 
VladyslavBox.addEventListener("click", () => {
  VladyslavBox.classList.toggle("highlight"); 
});

container.appendChild(VladyslavBox);
const VladyslavStyle = document.createElement("style");
VladyslavStyle.textContent = `
  .main-heading {
    font-size: 24px;
    color: darkblue;
    margin-bottom: 16px;
  }

  .box {
    width: 200px;
    height: 100px;
    background-color: lightgreen;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .box.highlight {
    background-color: gold; /* Золотий колір при активному класі "highlight" */
  }
`;
document.head.appendChild(VladyslavStyle);
