const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 500;

let positionX = 0;
let positionY = 0;

const drawImage = new Image();
drawImage.src = "IMG/BlueFish.png"; // Replace with your image path

class Fish {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.Xspeed = 2; // Speed of the fish
        this.Yspeed = 2; // Speed of the fish
    }
    draw() {
        ctx.drawImage(drawImage, this.x, this.y, 100, 100);
    }
}
    
const fish = new Fish(positionX, positionY);


function animate() {
    // right 
    if ( fish.x + 100 >= canvas.width ) {
        fish.x = canvas.width - 100;
        fish.Xspeed = -fish.Xspeed + Math.random(); // Increase speed when bouncing off the right wall
    }
    
    // left
    if ( fish.x <= 0 ) {
        fish.x = 0;
        fish.Xspeed = -fish.Xspeed + Math.random(); // Increase speed when bouncing off the left wall
    }

    // down
    if ( fish.y + 100 >= canvas.height ) {
        fish.y = canvas.height - 100;
        fish.Yspeed = -fish.Yspeed + Math.random(); // Increase speed when bouncing off the bottom wall
    }

    // up
    if ( fish.y <= 0 ) {
        fish.y = 0;
        fish.Yspeed = -fish.Yspeed + Math.random(); // Increase speed when bouncing off the top wall
    }

    // Move the fish
    fish.x += fish.Xspeed;
    fish.y += fish.Yspeed;

  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
  fish.draw();
  requestAnimationFrame(animate);
}

animate();