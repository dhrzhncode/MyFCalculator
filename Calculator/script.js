document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const circle = document.createElement('span');
        circle.classList.add('ripple');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        circle.style.width = circle.style.height = size + 'px';
        circle.style.left = (e.clientX - rect.left - size/2) + 'px';
        circle.style.top = (e.clientY - rect.top - size/2) + 'px';
        button.appendChild(circle);
        setTimeout(() => circle.remove(), 600);  // remove after animation
    });
});
const display = document.getElementById("display");
let jusCal = false;
let z;
function appendtodisplay(input){
    display.value += input;
    if (jusCal){
        if(isOperator(input)){
            jusCal = false;
        }else if(z){
            display.value = "";
            juscal = false;
            z = false;
        }
        else{
            display.value = "";
            juscal = false;
        }
        display.value += input;
    }
}
function isOperator(char){
    return['+','-','*','/','.','(',')'].includes(char);
}
function claerDisplay(){
    display.value = "";
}
function remove() {
    if (display.value.length > 0) {
        display.value = display.value.slice(0, -1);
    }
}

function calculate(){
    try{
        if(display.value.length>0){
            display.value = eval(display.value);
        }
    }catch(error){
        display.value = "";
        z = true;
    }
}
// if (display.value = "Undifined" || "undifined" || "infinite"){
//     const button = document.getElementsByClassName('btn');
//     Array.from(button).forEach(button => {
//         button.addEventListener('click',function(){
//             display.value = display.value(-2,-1);
//         });
//     });
//     z = false;
// }