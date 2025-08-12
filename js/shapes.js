
let Shape = document.querySelector(".js-path");
const btnShape = document.querySelector(".js-create-shape");
let selectCorners = document.querySelector(".js-corner-select")
let corners = selectCorners.value

function randomPairsArray(length, min, max) {
  return Array.from({ length }, () => [
    Math.floor(Math.random() * (max - min + 1)) + min,
    Math.floor(Math.random() * (max - min + 1)) + min
  ]);
}

function updateCorners() {
  corners = selectCorners.value
}

function createShape() {

    const newCoordinates = randomPairsArray(corners, 20, 300);
    const newPathData = newCoordinates.map(pair => pair.join(' ')).join(' L ');

    newPath = `M ${newPathData} Z`;

    Shape.setAttribute("d", newPath);
}


selectCorners.addEventListener("change", updateCorners);

btnShape.addEventListener("click", createShape);