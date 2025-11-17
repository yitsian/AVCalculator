const heat = document.querySelector('.heat-hover');

let mouseX = 0, mouseY = 0;     // actual mouse position
let glowX = 0, glowY = 0;       // smoothed glow position
const smoothing = 0.15;         // smaller = slower / more delay

// Update mouse position
window.addEventListener('mousemove', e => {
  const rect = heat.getBoundingClientRect();
  mouseX = e.clientX - rect.left;
  mouseY = e.clientY - rect.top;
});

// Animation loop for smooth follow
function animate() {
  // Smoothly interpolate position
  glowX += (mouseX - glowX) * smoothing;
  glowY += (mouseY - glowY) * smoothing;

  // Update CSS variables
  heat.style.setProperty('--x', `${glowX}px`);
  heat.style.setProperty('--y', `${glowY}px`);

  requestAnimationFrame(animate);
}

animate();