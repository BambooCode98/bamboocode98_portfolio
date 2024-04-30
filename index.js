

let canvas = document.querySelector('.canvas');

let ctx = canvas.getContext('2d');
let width = window.innerWidth,
    height = window.innerHeight;
const pi = 3.14159265;

ctx.lineWidth = 1;
ctx.fillStyle = "black";

let particles = [];

function animate() {
    ctx.fillRect(0,0,width,height);


    requestAnimationFrame(animate);
}
