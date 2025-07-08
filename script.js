// Simple confetti animation
const canvas = document.getElementById('confetti');
const ctx = canvas.getContext('2d');

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const colors = ['#ff5252', '#448aff', '#69f0ae', '#ffe57f', '#ff4081', '#ffd600'];
const confetti = [];

for (let i = 0; i < 120; i++) {
  confetti.push({
    x: randomInt(0, canvas.width),
    y: randomInt(-canvas.height, 0),
    r: randomInt(7, 12),
    color: colors[randomInt(0, colors.length-1)],
    speed: randomInt(1, 3),
    drift: randomInt(-2, 2)
  });
}

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (const c of confetti) {
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.r, 0, 2 * Math.PI);
    ctx.fillStyle = c.color;
    ctx.fill();
    c.y += c.speed;
    c.x += c.drift;
    if (c.y > canvas.height) {
      c.y = randomInt(-20, 0);
      c.x = randomInt(0, canvas.width);
    }
    if (c.x > canvas.width || c.x < 0) {
      c.x = randomInt(0, canvas.width);
    }
  }
  requestAnimationFrame(drawConfetti);
}
drawConfetti();
