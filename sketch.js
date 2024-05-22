const container = document.querySelector(".container");

const input = document.createElement("input");
input.classList.add('input');
input.type = 'number';
input.placeholder = 'Type here...';

const submitButton = document.createElement("button");
submitButton.textContent = 'Submit';
let side;
container.appendChild(input);
container.appendChild(submitButton);

input.addEventListener('keydown', (event)=>{
    if(event.key === 'Enter'){
        side = input.value;
        console.log(side);
        createBoxess(side);
    }
})
submitButton.addEventListener('click', ()=>{
        side = input.value;
        console.log(side);
        createBoxess(side);
    });
    
function createBoxess(side){

    const existingWraps = document.querySelectorAll('.Wrap');
    existingWraps.forEach(wrap => wrap.remove());

    for(let i = 0; i<side; i++){
        const boxwrap = document.createElement("div");
        boxwrap.classList.add('Wrap');
        for(let j = 0; j<side; j++){
            const box = document.createElement("div");
            box.classList.add('divBoxSingle');
            boxwrap.appendChild(box);
            box.addEventListener("mouseover", function() {
                box.style.backgroundColor = "red";
            }); 
        }
        container.appendChild(boxwrap);
}
}

createBoxess(16);




