
const shape = document.querySelector(".js-path");
const btnGenerate = document.querySelector(".js-create-shape");
const selectCorners = document.querySelector(".js-corner-select");
let nrCorners = selectCorners.value;


function generateCordinates(length, min, max) {
    return Array.from({length}, () => [
    Math.floor(Math.random() * (max - min + 1)) + min,
    Math.floor(Math.random() * (max - min + 1)) + min
  ])
};


selectCorners.addEventListener("change", () => {
  nrCorners = selectCorners.value
});

btnGenerate.addEventListener("click", () => {
    let newCoordinates = generateCordinates(nrCorners, 20, 300);
    let newPathData = newCoordinates.map(pair => pair.join(' ')).join(' L ');
    newPath = `M ${newPathData} Z`;
    shape.setAttribute("d", newPath);
} );