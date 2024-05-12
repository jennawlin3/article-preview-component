const d = document;
const share_btn1 = d.querySelector("#share-btn1");
const share_btn2 = d.querySelector("#share-btn2");
const share_btnd = d.querySelector(".share-btn_desk");
const showContainer = d.querySelector(".share-container");
const hideContainer = d.querySelector(".profile-container");
const tooltip = d.querySelector(".container-share_desk");
const share_icon = d.querySelector("#share-btn_desk");

console.log(hideContainer)
console.log(screen.width)
console.log(screen.availWidth)


if(window.matchMedia('(min-width: 800px)')) {
d.addEventListener("click", (e) => {
    console.log(e.target);

    if(e.target === share_btn1) {
        showContainer.classList.toggle("hide");
        hideContainer.classList.toggle("hide");
    }
    if(e.target === share_btn2) {
        showContainer.classList.toggle("hide");
        hideContainer.classList.toggle("hide");
    }
})
}

if(window.matchMedia('(min-width: 801px)')) {
    d.addEventListener("click", (e) => {
        console.log(e.target);
    
        if(e.target === share_btnd || share_icon) {
            tooltip.classList.toggle("disappear");
        } 
    })
}