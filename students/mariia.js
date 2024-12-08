const container = document.getElementById("output-container");

const header = document.createElement("h4");
header.textContent = "Mariia's Corner";
container.appendChild(header);

const img = document.createElement("img");
img.src =
    "https://hips.hearstapps.com/hmg-prod/images/chipmunk-nature-photos-1537973822.jpg";
img.style.width = "450px"; 
img.style.height = "250px";
img.alt = "chipmunck eating corn";
container.appendChild(img);

