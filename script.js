const bottomPanelLinks = document.querySelectorAll('.bottom-panel__link');
const socialMedia = document.querySelector('.social-media');

window.addEventListener("resize", () => {
    if (window.matchMedia("(max-width: 500px)").matches) {
        for (let bottomPanelLink of bottomPanelLinks) {
            console.log(bottomPanelLink);
        }
        console.log(socialMedia);
    }
} else {
}
});

window.addEventListener("resize", function () {
    if (window.matchMedia("(min-width: 500px)").matches) {
        console.log("Screen width is at least 500px");
    } else {
        console.log("Screen less than 500px");
    }
});

console.log('esssa');