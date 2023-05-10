let imageCounts = {
    block: 5,
    boat:2,
    car:4,
    plane:3,
    train:7,
};

let toyImage = document.getElementById("toy-image");
let toySelector = document.getElementById("toy-selector");

toySelector.addEventListener("change", () => {
    let selection = toySelector.value;
    let index = Math.floor(Math.random() * imageCounts[selection] + 1);
    
    toyImage.src = `img/${selection}${index}.jpg`;
});