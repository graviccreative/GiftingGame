import confetti from 'canvas-confetti';

const FIESTA_COLORS = ['#FFD700', '#E53935', '#43A047', '#FF4081', '#FFAB00', '#FF6D00'];

export function fireConfetti() {
  // Main center burst
  confetti({
    particleCount: 80,
    spread: 70,
    origin: { x: 0.5, y: 0.5 },
    colors: FIESTA_COLORS,
    startVelocity: 30,
    gravity: 0.8,
  });

  // Left burst
  setTimeout(() => {
    confetti({
      particleCount: 40,
      angle: 60,
      spread: 50,
      origin: { x: 0, y: 0.6 },
      colors: FIESTA_COLORS,
    });
  }, 100);

  // Right burst
  setTimeout(() => {
    confetti({
      particleCount: 40,
      angle: 120,
      spread: 50,
      origin: { x: 1, y: 0.6 },
      colors: FIESTA_COLORS,
    });
  }, 200);
}
