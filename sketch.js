const container = document.querySelector("#container");

function createBoxes(){
    for(let i = 1; i<257; i++){
    const box = document.createElement("div");
    box.classList.add('divBoxSingle');
    box.style.boxSizing = 'border-box';
    box.style.width = '50px';
    box.style.height = '50px';
    box.style.border = '1px solid black';
    container.appendChild(box);
}}

console.log("hello");
createBoxes();
