const container = document.querySelector(".container");

// const btn = document.createElement("button");
// btn.addEventListener("click", function{

// })
function createBoxes(){
//     const btn = document.createElement("button");
//     btn.textContent = "Click me";
//     btn.addEventListener("click", function(){
//     console.log("hello");
// })
// container.appendChild(btn);

    for(let i = 1; i<257; i++){
    const box = document.createElement("div");
    box.classList.add('divBoxSingle');
    container.appendChild(box);
    box.addEventListener("mouseover", function() {
        box.style.backgroundColor = "yellow";
    });

    // box.addEventListener("mouseout", function() {
    //     box.style.backgroundColor = ""; // Resets to default background color
    // });
}}

container.style.width = "100%"; // Adjust width according to your preference
container.style.height = "750px"; // Adjust height according to your preference

const boxSize = 400 / 16; // Total container width divided by number of squares
const boxes = document.querySelectorAll('.divBoxSingle');
boxes.forEach(box => {
    box.style.width = boxSize + "px";
    box.style.height = boxSize + "px";
});

createBoxes();
