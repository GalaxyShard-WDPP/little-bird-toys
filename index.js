let imageCounts = {
    placeholder: 1,
    block: 3,
    boat: 1,
    car: 4,
    plane: 3,
    train: 7,
};
let categoryCount = 6;

let toyImage = document.getElementById("toy-image");
let toySelector = document.getElementById("toy-selector");
let carouselElement = document.getElementById("carousel");
let carousel = new bootstrap.Carousel(carouselElement)

let clearId = null;
let imageIndex = -1;
function genImage(type) {
    toyImage.src = `img/${type}${genIndex(type)}.png`;
}
function genIndex(type) {
    imageIndex = (imageIndex + 1) % imageCounts[type];
    return imageIndex;
}
genImage("block");

let toyButtons = toySelector.querySelectorAll("button")
for (let button of toyButtons) {
    button.addEventListener("click", () => {
        let selectedOption = button.dataset.type;
        let selectedIndex = button.dataset.index;
        
        imageIndex = -1;
        
        genImage(selectedOption);
        // if (clearId !== null) {
        //     clearInvterval(clearId);
        // }
        // clearId = setInterval(() => {
        //     genImage(selectedOption);
        // }, 3000);
        // if (selectedOption !== "placeholder") {
        //     if (clearId !== null) {
        //         clearInterval(clearId);
        //     }
        //     clearId = setInterval(() => {
        //         genImage(selectedOption)
        //     }, 3000);
        // } else {
        //     clearInterval(clearId);
        //     clearId = null;
        // }
    
        carousel.to(selectedIndex);
    });
}