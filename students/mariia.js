const container = document.getElementById("output-container");

const boxm = document.createElement("div");
boxm.classList.add("box-mariia");
// boxm.style.width = "450px";
boxm.style.height = "350px";
boxm.style.backgroundColor = "lightpink";
boxm.style.border = "7px dotted lightgreen";
container.append(boxm);

const header = document.createElement("h4");
header.textContent = "Mariia's Corner";
boxm.appendChild(header);

const img = document.createElement("img");
img.src =
    "https://hips.hearstapps.com/hmg-prod/images/chipmunk-nature-photos-1537973822.jpg";
img.style.width = "450px"; 
img.style.height = "250px";
img.alt = "chipmunck eating corn";
boxm.appendChild(img);



