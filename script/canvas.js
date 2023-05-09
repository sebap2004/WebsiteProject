// Get the canvas element
const canvas = document.getElementById('animationCanvas');
const context = canvas.getContext('2d');

const min = -5;
const max = 5;
const circleRadius = 10;
const lineWidth = 8;

const firstLinesColor = "#bd3baf";
const firstCirclesColor = "#8f0686";
const firstFillColor = "#d651cd";

const secondLinesColor = "#C0FF4D";
const secondCirclesColor = "#73A811";
const secondFillColor = "#B0F531";

// Set the initial position of the circle
let x1 = Math.random() * (canvas.width - 2 * circleRadius) + circleRadius;
let y1 = Math.random() * (canvas.height - 2 * circleRadius) + circleRadius;

let x2 = Math.random() * (canvas.width - 2 * circleRadius) + circleRadius;
let y2 = Math.random() * (canvas.height - 2 * circleRadius) + circleRadius;

let x3 = Math.random() * (canvas.width - 2 * circleRadius) + circleRadius;
let y3 = Math.random() * (canvas.height - 2 * circleRadius) + circleRadius;

let x4 = Math.random() * (canvas.width - 2 * circleRadius) + circleRadius;
let y4 = Math.random() * (canvas.height - 2 * circleRadius) + circleRadius;

let x5 = Math.random() * (canvas.width - 2 * circleRadius) + circleRadius;
let y5 = Math.random() * (canvas.height - 2 * circleRadius) + circleRadius;

let x6 = Math.random() * (canvas.width - 2 * circleRadius) + circleRadius;
let y6 = Math.random() * (canvas.height - 2 * circleRadius) + circleRadius;

// Set the speed and direction of the circle
let dx1 = Math.floor(Math.random() * (max - min + 1) + min);
let dy1 = Math.floor(Math.random() * (max - min + 1) + min);
let dx2 = Math.floor(Math.random() * (max - min + 1) + min);
let dy2 = Math.floor(Math.random() * (max - min + 1) + min);
let dx3 = Math.floor(Math.random() * (max - min + 1) + min);
let dy3 = Math.floor(Math.random() * (max - min + 1) + min);
let dx4 = Math.floor(Math.random() * (max - min + 1) + min);
let dy4 = Math.floor(Math.random() * (max - min + 1) + min);
let dx5 = Math.floor(Math.random() * (max - min + 1) + min);
let dy5 = Math.floor(Math.random() * (max - min + 1) + min);
let dx6 = Math.floor(Math.random() * (max - min + 1) + min);
let dy6 = Math.floor(Math.random() * (max - min + 1) + min);
function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    // First set of lines
    context.beginPath();
    context.strokeStyle = firstLinesColor;
    context.fillStyle = firstFillColor; // set fill color
    context.lineWidth = lineWidth;
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.lineTo(x3, y3); // add a line to close the shape
    context.closePath();
    context.fill(); // fill the shape
    context.stroke();

// Second set of lines
    context.beginPath();
    context.strokeStyle = secondLinesColor;
    context.fillStyle = secondFillColor; // set fill color
    context.lineWidth = lineWidth;
    context.moveTo(x4, y4);
    context.lineTo(x5, y5);
    context.lineTo(x6, y6); // add a line to close the shape
    context.closePath();
    context.fill(); // fill the shape
    context.stroke();


    // First set of circles
    context.beginPath();
    context.arc(x1, y1, circleRadius, 0, 2 * Math.PI);
    context.fillStyle = firstCirclesColor;
    context.fill();
    context.closePath();

    context.beginPath();
    context.arc(x2, y2, circleRadius, 0, 2 * Math.PI);
    context.fillStyle = firstCirclesColor;
    context.fill();
    context.closePath();

    context.beginPath();
    context.arc(x3, y3, circleRadius, 0, 2 * Math.PI);
    context.fillStyle = firstCirclesColor;
    context.fill();
    context.closePath();

    // Second set of circles
    context.beginPath();
    context.arc(x4, y4, circleRadius, 0, 2 * Math.PI);
    context.fillStyle = secondCirclesColor;
    context.fill();
    context.closePath();

    context.beginPath();
    context.arc(x5, y5, circleRadius, 0, 2 * Math.PI);
    context.fillStyle = secondCirclesColor;
    context.fill();
    context.closePath();

    context.beginPath();
    context.arc(x6, y6, circleRadius, 0, 2 * Math.PI);
    context.fillStyle = secondCirclesColor;
    context.fill();
    context.closePath();

    // Check if the first set of lines has hit the edge of the canvas
    if (x1 + dx1 > canvas.width - circleRadius || x1 + dx1 < circleRadius) {
        dx1 = -dx1;
    }
    if (y1 + dy1 > canvas.height - circleRadius || y1 + dy1 < circleRadius) {
        dy1 = -dy1;
    }

    if (x2 + dx2 > canvas.width - circleRadius || x2 + dx2 < circleRadius) {
        dx2 = -dx2;
    }
    if (y2 + dy2 > canvas.height - circleRadius || y2 + dy2 < circleRadius) {
        dy2 = -dy2;
    }

    if (x3 + dx3 > canvas.width - circleRadius || x3 + dx3 < circleRadius) {
        dx3 = -dx3;
    }
    if (y3 + dy3 > canvas.height - circleRadius || y3 + dy3 < circleRadius) {
        dy3 = -dy3;
    }
    if (x4 + dx4 > canvas.width - circleRadius || x4 + dx4 < circleRadius) {
        dx4 = -dx4;
    }
    if (y4 + dy4 > canvas.height - circleRadius || y4 + dy4 < circleRadius) {
        dy4 = -dy4;
    }

    if (x5 + dx5 > canvas.width - circleRadius || x5 + dx5 < circleRadius) {
        dx5 = -dx5;
    }
    if (y5 + dy5 > canvas.height - circleRadius || y5 + dy5 < circleRadius) {
        dy5 = -dy5;
    }

    if (x6 + dx6 > canvas.width - circleRadius || x6 + dx6 < circleRadius) {
        dx6 = -dx6;
    }
    if (y6 + dy6 > canvas.height - circleRadius || y6 + dy6 < circleRadius) {
        dy6 = -dy6;
    }

    x1 += dx1;
    y1 += dy1;

    x2 += dx2;
    y2 += dy2;

    x3 += dx3;
    y3 += dy3;

    x4 += dx4;
    y4 += dy4;

    x5 += dx5;
    y5 += dy5;

    x6 += dx6;
    y6 += dy6;


    // Call the animation function again
    requestAnimationFrame(animate);
}
// Call the animation function to start the animation
animate();