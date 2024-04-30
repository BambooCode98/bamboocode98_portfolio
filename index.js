

let canvas = document.querySelector('.canvas');

let ctx = canvas.getContext('2d');
let width = window.innerWidth,
    height = window.innerHeight;
const pi = 3.14159265;

ctx.lineWidth = 1;
ctx.fillStyle = "black";

ctx.beginPath();
for(let i = 0; i < height; i+=10) {
  for(let j = 0; j < width; j++) {
    ctx.arc(i,j,1,0,2*pi);  
    ctx.fillStyle="hsl(${i},${j},${i}${j})";
  }
}
ctx.fill();

console.log("1");

