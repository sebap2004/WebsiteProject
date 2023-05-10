// Get the canvas element
const canvas = document.getElementById('animationCanvas');
const context = canvas.getContext('2d');


// Sets the minimum/maximum random speeds, square size and line width.
const min = -2;
const max = 2;
const squareRadius = 10;
const lineWidth = 2;

// Sets the colors of each shape.
const firstLinesColor = "#A32CC4";
const firstSquareColor = "#6B1A92";
const firstFillColorStart = "#A32CC4";
const firstFillColorEnd = "#D079FF";

const secondLinesColor = "#1ECFC6";
const secondSquareColor = "#0E697A";
const secondFillColorStart = "#1ECFC6";
const secondFillColorEnd = "#66FFF8";

// Set the initial positions of the squares
let x1 = Math.random() * (canvas.width - 2 * squareRadius) + squareRadius;
let y1 = Math.random() * (canvas.height - 2 * squareRadius) + squareRadius;

let x2 = Math.random() * (canvas.width - 2 * squareRadius) + squareRadius;
let y2 = Math.random() * (canvas.height - 2 * squareRadius) + squareRadius;

let x3 = Math.random() * (canvas.width - 2 * squareRadius) + squareRadius;
let y3 = Math.random() * (canvas.height - 2 * squareRadius) + squareRadius;

let x4 = Math.random() * (canvas.width - 2 * squareRadius) + squareRadius;
let y4 = Math.random() * (canvas.height - 2 * squareRadius) + squareRadius;

let x5 = Math.random() * (canvas.width - 2 * squareRadius) + squareRadius;
let y5 = Math.random() * (canvas.height - 2 * squareRadius) + squareRadius;

let x6 = Math.random() * (canvas.width - 2 * squareRadius) + squareRadius;
let y6 = Math.random() * (canvas.height - 2 * squareRadius) + squareRadius;

// Sets the speed and direction of the squares.
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

// function that is called by the canvas.
function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    // First set of lines
    context.beginPath();
    context.strokeStyle = firstLinesColor;

    // Set up gradient fill for first shape
    let gradient1 = context.createLinearGradient(x1, y1, x3, y3);
    gradient1.addColorStop(0, firstFillColorStart);
    gradient1.addColorStop(1, firstFillColorEnd);
    context.fillStyle = gradient1;

    // Triangle is drawn by moving the pen to each of its points.D
    context.lineWidth = lineWidth;
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.lineTo(x3, y3);
    context.closePath();
    context.fill();
    context.stroke();

    // First set of squares
    context.fillStyle = firstSquareColor;
    context.fillRect(x1 - squareRadius, y1 - squareRadius, squareRadius * 2, squareRadius * 2);
    context.fillRect(x2 - squareRadius, y2 - squareRadius, squareRadius * 2, squareRadius * 2);
    context.fillRect(x3 - squareRadius, y3 - squareRadius, squareRadius * 2, squareRadius * 2);

// Second set of lines
    context.beginPath();
    context.strokeStyle = secondLinesColor;

    // Set up gradient fill for second shape
    let gradient2 = context.createLinearGradient(x4, y4, x6, y6);
    gradient2.addColorStop(0, secondFillColorStart); // start color
    gradient2.addColorStop(1, secondFillColorEnd); // end color
    context.fillStyle = gradient2;

    context.lineWidth = lineWidth;
    context.moveTo(x4, y4);
    context.lineTo(x5, y5);
    context.lineTo(x6, y6);
    context.closePath();
    context.fill();
    context.stroke();

    // Second set of squares
    context.fillStyle = secondSquareColor;
    context.fillRect(x4 - squareRadius, y4 - squareRadius, squareRadius * 2, squareRadius * 2);
    context.fillRect(x5 - squareRadius, y5 - squareRadius, squareRadius * 2, squareRadius * 2);
    context.fillRect(x6 - squareRadius, y6 - squareRadius, squareRadius * 2, squareRadius * 2);


    // Code to make the squares bounce off the walls of the canvas.
    if (x1 + dx1 > canvas.width - squareRadius || x1 + dx1 < squareRadius) {
        dx1 = -dx1;
    }
    if (y1 + dy1 > canvas.height - squareRadius || y1 + dy1 < squareRadius) {
        dy1 = -dy1;
    }

    if (x2 + dx2 > canvas.width - squareRadius || x2 + dx2 < squareRadius) {
        dx2 = -dx2;
    }
    if (y2 + dy2 > canvas.height - squareRadius || y2 + dy2 < squareRadius) {
        dy2 = -dy2;
    }

    if (x3 + dx3 > canvas.width - squareRadius || x3 + dx3 < squareRadius) {
        dx3 = -dx3;
    }
    if (y3 + dy3 > canvas.height - squareRadius || y3 + dy3 < squareRadius) {
        dy3 = -dy3;
    }
    if (x4 + dx4 > canvas.width - squareRadius || x4 + dx4 < squareRadius) {
        dx4 = -dx4;
    }
    if (y4 + dy4 > canvas.height - squareRadius || y4 + dy4 < squareRadius) {
        dy4 = -dy4;
    }

    if (x5 + dx5 > canvas.width - squareRadius || x5 + dx5 < squareRadius) {
        dx5 = -dx5;
    }
    if (y5 + dy5 > canvas.height - squareRadius || y5 + dy5 < squareRadius) {
        dy5 = -dy5;
    }

    if (x6 + dx6 > canvas.width - squareRadius || x6 + dx6 < squareRadius) {
        dx6 = -dx6;
    }
    if (y6 + dy6 > canvas.height - squareRadius || y6 + dy6 < squareRadius) {
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