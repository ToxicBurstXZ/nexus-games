const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

document.body.appendChild(canvas);

canvas.style.position = 'fixed';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.width = '100vw';
canvas.style.height = '100vh';
canvas.style.zIndex = '-1';

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Star {
    constructor(x, y, size, speed) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speed = speed;
    }

    update() {
        this.y += this.speed;
        if (this.y > canvas.height) {
            this.y = 0; // Reset to top
            this.x = Math.random() * canvas.width; // Random x position
        }
    }

    draw() {
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

const stars = [];
const numStars = 200; // Adjust the Number of Stars

for (let i = 0; i < numStars; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const size = Math.random() * 2 + 0.5; // Adjust the Size of the Stars
    const speed = Math.random() * 4 + 0.5; // Adjust the Speed of the Stars
    stars.push(new Star(x, y, size, speed));
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas

    stars.forEach(star => {
        star.update();
        star.draw();
    });

    requestAnimationFrame(animate);
}

animate();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
