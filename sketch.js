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
    let isMouseDown = false;

    for(let i = 0; i<side; i++){
        const boxwrap = document.createElement("div");
        boxwrap.classList.add('Wrap');
        for(let j = 0; j<side; j++){
            const box = document.createElement("div");
            box.classList.add('divBoxSingle');
            box.style.width = `${100.0/side}vw`;
            box.style.height = `${79.0/side}vh`;
            box.style.border = `${48.0/side}px solid black`;
            box.style.margin= `${16.0/side}px`;
            boxwrap.appendChild(box);
            box.addEventListener("mousedown", function() {
                let brightness = 100;
                const currentBgColor = window.getComputedStyle(box).backgroundColor;
                if(currentBgColor !== "rgb(127, 255, 212)"){
                    brightness -= 10; // Decrease brightness by 10% each time
                    if (brightness < 0) brightness = 0; // Ensure brightness does not go below 0%
                    box.style.filter = `brightness(${brightness}%)`;
                }
                else{
                    const rC = ['red', 'orange', 'yellow', 'green', 'lime', 'blue', 'indigo', 'violet'];
                    box.style.backgroundColor = rC[Math.floor(Math.random() * rC.length)];;
                }
                isMouseDown = true;
            }); 
            box.addEventListener("mouseover", function() {
                 if(isMouseDown){
                    let brightness = 100;
                    const currentBgColor = window.getComputedStyle(box).backgroundColor;
                    if(currentBgColor !== "rgb(127, 255, 212)"){
                        brightness -= 10; // Decrease brightness by 10% each time
                        if (brightness < 0) brightness = 0; // Ensure brightness does not go below 0%
                        box.style.filter = `brightness(${brightness}%)`;
                    }
                    else{
                        const rC = ['red', 'orange', 'yellow', 'green', 'lime', 'blue', 'indigo', 'violet'];
                        box.style.backgroundColor = rC[Math.floor(Math.random() * rC.length)];;
                    }
                    isMouseDown = true;
                 }
            });
            box.addEventListener("mouseup", function() {
                isMouseDown = false;
            });
        }
        container.appendChild(boxwrap);
}
}
createBoxess(16);




