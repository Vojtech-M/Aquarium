const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 500;

const drawImage = new Image();
drawImage.src = "IMG/FISHH.png"; // Replace with your image path

class Fish {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.Xspeed = 0.5;
        this.Yspeed = 0.5;
    }

    move() {
        // right
        if (this.x + 100 >= canvas.width) {
            this.x = canvas.width - 100;
            this.Xspeed = -Math.sign(this.Xspeed) * (1 + Math.random());
        }

        // left
        if (this.x <= 0) {
            this.x = 0;
            this.Xspeed = -Math.sign(this.Xspeed) * (1 + Math.random());
        }

        // bottom
        if (this.y + 100 >= canvas.height) {
            this.y = canvas.height - 100;
            this.Yspeed = -Math.sign(this.Yspeed) * (1 + Math.random());
        }

        // top
        if (this.y <= 0) {
            this.y = 0;
            this.Yspeed = -Math.sign(this.Yspeed) * (1 + Math.random());
        }

        this.x += this.Xspeed;
        this.y += this.Yspeed;
    }

    draw() {
        ctx.drawImage(drawImage, this.x, this.y, 100, 100);
    }
}
    // Create multiple fish
    const fishes = [
        new Fish(0, 0),
        new Fish(150, 150),
        new Fish(200, 50),
        new Fish(100, 300),
        new Fish(350, 100),
    ];

    // Initial display of fish count
    document.getElementById("fishCount").textContent = `Fish count: ${fishes.length}`;

    const button = document.getElementById("AddFish");
    button.addEventListener("click", () => {
        fishes.push(new Fish(Math.random() * (canvas.width - 100), Math.random() * (canvas.height - 100)));
        console.log(`Fish added. Total fish count: ${fishes.length}`);
        // Update the display after adding a fish
        document.getElementById("fishCount").textContent = `Fish count: ${fishes.length}`;
    });

 const button1 = document.getElementById("RemoveFish");
    button1.addEventListener("click", () => {
        fishes.pop()
        console.log(`Fish removed. Total fish count: ${fishes.length}`);
        // Update the display after adding a fish
        document.getElementById("fishCount").textContent = `Fish count: ${fishes.length}`;
    });





function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const fish of fishes) {
        fish.move();
        fish.draw();
    }
    requestAnimationFrame(animate);
}

animate();

const backgroundImage = new Image();
backgroundImage.src = "IMG/Ocean.jpg"; // Replace with your background image path
ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);


