import { type ReactNode } from 'react';
import { motion } from 'motion/react';

interface FloatingIcon {
  svg: ReactNode;
  x: string;
  y: string;
  size: number;
  rotate: number;
  delay: number;
  duration: number;
  drift: number;
  opacity: number;
}

/* ── Mexico illustrations ── */

const Cactus = () => (
  <svg viewBox="0 0 80 120" fill="none">
    <rect x="32" y="15" width="16" height="85" rx="8" fill="#4CAF50" />
    <rect x="32" y="15" width="16" height="85" rx="8" fill="url(#cactusGrad)" />
    <rect x="48" y="35" width="22" height="12" rx="6" fill="#4CAF50" />
    <rect x="60" y="22" width="12" height="25" rx="6" fill="#4CAF50" />
    <rect x="10" y="50" width="22" height="12" rx="6" fill="#4CAF50" />
    <rect x="10" y="38" width="12" height="25" rx="6" fill="#4CAF50" />
    {/* Flower on top */}
    <circle cx="40" cy="12" r="6" fill="#FF4081" />
    <circle cx="40" cy="12" r="3" fill="#FFD700" />
    {/* Spines */}
    <line x1="28" y1="30" x2="24" y2="28" stroke="#81C784" strokeWidth="1.5" />
    <line x1="52" y1="45" x2="56" y2="43" stroke="#81C784" strokeWidth="1.5" />
    <line x1="28" y1="60" x2="24" y2="58" stroke="#81C784" strokeWidth="1.5" />
    <line x1="52" y1="70" x2="56" y2="68" stroke="#81C784" strokeWidth="1.5" />
    {/* Pot */}
    <path d="M26 100 L28 112 L52 112 L54 100Z" fill="#D84315" />
    <rect x="24" y="97" width="32" height="5" rx="2" fill="#E65100" />
    <defs>
      <linearGradient id="cactusGrad" x1="32" y1="15" x2="48" y2="15" gradientUnits="userSpaceOnUse">
        <stop stopColor="#66BB6A" />
        <stop offset="1" stopColor="#388E3C" />
      </linearGradient>
    </defs>
  </svg>
);

const Sombrero = () => (
  <svg viewBox="0 0 100 60" fill="none">
    {/* Brim */}
    <ellipse cx="50" cy="46" rx="48" ry="12" fill="#E65100" />
    <ellipse cx="50" cy="44" rx="48" ry="10" fill="#FF8F00" />
    {/* Crown */}
    <path d="M28 44 C28 24, 35 10, 50 6 C65 10, 72 24, 72 44" fill="#FF8F00" />
    <path d="M28 44 C28 24, 35 10, 50 6 C65 10, 72 24, 72 44" fill="url(#sombreroGrad)" />
    {/* Band */}
    <path d="M30 40 Q50 34, 70 40" stroke="#D84315" strokeWidth="4" fill="none" />
    {/* Zigzag decoration */}
    <path d="M32 38 L35 35 L38 38 L41 35 L44 38 L47 35 L50 38 L53 35 L56 38 L59 35 L62 38 L65 35 L68 38" stroke="#FFD700" strokeWidth="1.5" fill="none" />
    {/* Pompoms on brim */}
    <circle cx="15" cy="48" r="3" fill="#E53935" />
    <circle cx="30" cy="52" r="3" fill="#FFD700" />
    <circle cx="50" cy="54" r="3" fill="#43A047" />
    <circle cx="70" cy="52" r="3" fill="#FF4081" />
    <circle cx="85" cy="48" r="3" fill="#2196F3" />
    <defs>
      <linearGradient id="sombreroGrad" x1="50" y1="6" x2="50" y2="44" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFB300" />
        <stop offset="1" stopColor="#FF6F00" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

const Chili = () => (
  <svg viewBox="0 0 40 80" fill="none">
    <path d="M20 14 C12 16, 6 30, 6 46 C6 62, 12 72, 18 78 C20 76, 22 72, 22 78 C28 72, 34 62, 34 46 C34 30, 28 16, 20 14Z" fill="#D32F2F" />
    <path d="M20 14 C16 16, 12 26, 12 40 C12 50, 14 58, 18 64" stroke="#E57373" strokeWidth="2" fill="none" opacity="0.5" />
    {/* Stem */}
    <path d="M17 14 C17 8, 14 4, 12 2 M20 12 C20 6, 20 2, 22 0 M23 14 C23 8, 26 4, 28 2" stroke="#43A047" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    {/* Highlight */}
    <path d="M14 28 C14 24, 16 20, 18 18" stroke="#FFCDD2" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
  </svg>
);

const Guitar = () => (
  <svg viewBox="0 0 50 110" fill="none">
    {/* Neck */}
    <rect x="22" y="0" width="6" height="48" rx="2" fill="#5D4037" />
    {/* Tuning pegs */}
    <circle cx="20" cy="4" r="2.5" fill="#FFD700" />
    <circle cx="20" cy="12" r="2.5" fill="#FFD700" />
    <circle cx="30" cy="4" r="2.5" fill="#FFD700" />
    <circle cx="30" cy="12" r="2.5" fill="#FFD700" />
    {/* Headstock */}
    <rect x="19" y="0" width="12" height="16" rx="3" fill="#3E2723" />
    {/* Strings */}
    <line x1="23" y1="16" x2="23" y2="85" stroke="#FFD700" strokeWidth="0.5" opacity="0.6" />
    <line x1="25" y1="16" x2="25" y2="85" stroke="#FFD700" strokeWidth="0.5" opacity="0.6" />
    <line x1="27" y1="16" x2="27" y2="85" stroke="#FFD700" strokeWidth="0.5" opacity="0.6" />
    {/* Body */}
    <ellipse cx="25" cy="72" rx="22" ry="28" fill="#E65100" />
    <ellipse cx="25" cy="68" rx="18" ry="22" fill="#FF8F00" />
    {/* Sound hole */}
    <circle cx="25" cy="68" r="7" fill="#3E2723" />
    <circle cx="25" cy="68" r="8" fill="none" stroke="#FFD700" strokeWidth="1.5" />
    {/* Decorative rosette */}
    <circle cx="25" cy="68" r="10" fill="none" stroke="#E53935" strokeWidth="1" opacity="0.7" />
    {/* Flower decoration */}
    <circle cx="15" cy="82" r="3" fill="#FF4081" opacity="0.8" />
    <circle cx="35" cy="82" r="3" fill="#FF4081" opacity="0.8" />
    <path d="M18 90 Q25 96, 32 90" stroke="#43A047" strokeWidth="2" fill="none" opacity="0.7" />
    {/* Bridge */}
    <rect x="19" y="84" width="12" height="3" rx="1" fill="#3E2723" />
  </svg>
);

const Taco = () => (
  <svg viewBox="0 0 90 65" fill="none">
    {/* Shell */}
    <path d="M8 55 C8 25, 25 8, 45 8 C65 8, 82 25, 82 55" fill="#FFCA28" stroke="#F9A825" strokeWidth="2" />
    {/* Inner shell */}
    <path d="M14 52 C14 30, 27 15, 45 15 C63 15, 76 30, 76 52" fill="#FFE082" />
    {/* Fillings */}
    <ellipse cx="30" cy="38" rx="8" ry="6" fill="#43A047" /> {/* Lettuce */}
    <ellipse cx="50" cy="35" rx="7" ry="5" fill="#43A047" opacity="0.8" />
    <circle cx="38" cy="32" r="5" fill="#E53935" /> {/* Tomato */}
    <circle cx="55" cy="30" r="4" fill="#E53935" opacity="0.8" />
    <ellipse cx="45" cy="42" rx="10" ry="4" fill="#8D6E63" /> {/* Meat */}
    <circle cx="62" cy="38" r="3" fill="#FFD700" /> {/* Cheese */}
    <circle cx="28" cy="44" r="3" fill="#FFD700" opacity="0.7" />
  </svg>
);

const Maracas = () => (
  <svg viewBox="0 0 44 90" fill="none">
    {/* Handle */}
    <rect x="19" y="42" width="6" height="44" rx="3" fill="#8D6E63" />
    {/* Head */}
    <ellipse cx="22" cy="26" rx="18" ry="24" fill="#FF6D00" />
    <ellipse cx="22" cy="24" rx="15" ry="20" fill="#FF8F00" />
    {/* Stripes */}
    <path d="M10 16 Q22 12, 34 16" stroke="#E53935" strokeWidth="2.5" fill="none" />
    <path d="M8 24 Q22 20, 36 24" stroke="#43A047" strokeWidth="2.5" fill="none" />
    <path d="M10 32 Q22 28, 34 32" stroke="#FFD700" strokeWidth="2.5" fill="none" />
    {/* Dots */}
    <circle cx="14" cy="20" r="2" fill="#FFD700" />
    <circle cx="30" cy="20" r="2" fill="#FFD700" />
    <circle cx="22" cy="14" r="2" fill="#E53935" />
  </svg>
);

const Avocado = () => (
  <svg viewBox="0 0 60 80" fill="none">
    <path d="M30 4 C14 10, 4 30, 4 50 C4 66, 14 76, 30 76 C46 76, 56 66, 56 50 C56 30, 46 10, 30 4Z" fill="#558B2F" />
    <path d="M30 14 C20 18, 12 32, 12 48 C12 60, 18 68, 30 68 C42 68, 48 60, 48 48 C48 32, 40 18, 30 14Z" fill="#8BC34A" />
    <circle cx="30" cy="48" r="14" fill="#795548" />
    <circle cx="30" cy="48" r="10" fill="#8D6E63" />
    <circle cx="26" cy="44" r="4" fill="#A1887F" opacity="0.5" />
  </svg>
);

/* ── Sweden illustrations ── */

const DalaHorse = () => (
  <svg viewBox="0 0 80 90" fill="none">
    {/* Body */}
    <path d="M20 35 L20 70 L28 70 L28 55 L52 55 L52 70 L60 70 L60 35 C60 25, 50 18, 40 18 C30 18, 20 25, 20 35Z" fill="#1565C0" />
    {/* Head */}
    <path d="M55 35 L72 15 L78 18 L68 30 L62 38Z" fill="#1565C0" />
    {/* Ear */}
    <path d="M70 14 L74 6 L78 14Z" fill="#1565C0" />
    {/* Front legs */}
    <rect x="24" y="55" width="8" height="28" rx="2" fill="#1565C0" />
    {/* Back legs */}
    <rect x="48" y="55" width="8" height="28" rx="2" fill="#1565C0" />
    {/* Hooves */}
    <rect x="23" y="80" width="10" height="5" rx="2" fill="#0D47A1" />
    <rect x="47" y="80" width="10" height="5" rx="2" fill="#0D47A1" />
    {/* Saddle decoration */}
    <path d="M28 30 Q40 22, 52 30 Q40 38, 28 30Z" fill="#FFD700" />
    <circle cx="40" cy="30" r="4" fill="#E53935" />
    {/* Bridle */}
    <path d="M62 28 L72 20" stroke="#FFD700" strokeWidth="2" />
    {/* Eye */}
    <circle cx="68" cy="22" r="2" fill="white" />
    <circle cx="68" cy="22" r="1" fill="#0D47A1" />
    {/* Decorative swirls */}
    <path d="M30 42 Q36 38, 34 46" stroke="#FFD700" strokeWidth="1.5" fill="none" />
    <path d="M44 42 Q50 38, 48 46" stroke="#FFD700" strokeWidth="1.5" fill="none" />
    <circle cx="37" cy="50" r="2" fill="#FFD700" />
    <circle cx="47" cy="50" r="2" fill="#FFD700" />
  </svg>
);

const VikingHelmet = () => (
  <svg viewBox="0 0 80 70" fill="none">
    {/* Helmet dome */}
    <path d="M15 45 C15 25, 25 10, 40 10 C55 10, 65 25, 65 45" fill="#78909C" />
    <path d="M15 45 C15 25, 25 10, 40 10 C55 10, 65 25, 65 45" fill="url(#helmetGrad)" />
    {/* Rim */}
    <ellipse cx="40" cy="45" rx="26" ry="6" fill="#546E7A" />
    <rect x="14" y="42" width="52" height="5" rx="2" fill="#90A4AE" />
    {/* Nose guard */}
    <rect x="37" y="30" width="6" height="22" rx="2" fill="#B0BEC5" />
    {/* Horns */}
    <path d="M14 38 C6 30, 0 14, 4 4" stroke="#FFE082" strokeWidth="5" strokeLinecap="round" fill="none" />
    <path d="M66 38 C74 30, 80 14, 76 4" stroke="#FFE082" strokeWidth="5" strokeLinecap="round" fill="none" />
    {/* Horn tips */}
    <circle cx="4" cy="4" r="3" fill="#FFF9C4" />
    <circle cx="76" cy="4" r="3" fill="#FFF9C4" />
    {/* Rivets */}
    <circle cx="22" cy="44" r="2" fill="#FFD700" />
    <circle cx="40" cy="44" r="2" fill="#FFD700" />
    <circle cx="58" cy="44" r="2" fill="#FFD700" />
    <defs>
      <linearGradient id="helmetGrad" x1="40" y1="10" x2="40" y2="45" gradientUnits="userSpaceOnUse">
        <stop stopColor="#B0BEC5" />
        <stop offset="1" stopColor="#607D8B" />
      </linearGradient>
    </defs>
  </svg>
);

const SwedishFlag = () => (
  <svg viewBox="0 0 70 50" fill="none">
    {/* Flag background */}
    <rect x="2" y="2" width="64" height="44" rx="3" fill="#1565C0" />
    {/* Cross */}
    <rect x="20" y="2" width="10" height="44" fill="#FFD700" />
    <rect x="2" y="18" width="64" height="10" fill="#FFD700" />
    {/* Pole */}
    <rect x="0" y="0" width="4" height="50" rx="2" fill="#8D6E63" />
    <circle cx="2" cy="2" r="3" fill="#FFD700" />
  </svg>
);

const Crown = () => (
  <svg viewBox="0 0 60 50" fill="none">
    <path d="M8 42 L4 14 L16 26 L30 6 L44 26 L56 14 L52 42Z" fill="#FFD700" />
    <path d="M8 42 L4 14 L16 26 L30 6 L44 26 L56 14 L52 42Z" fill="url(#crownGrad)" />
    <rect x="6" y="38" width="48" height="8" rx="3" fill="#FFC107" />
    {/* Gems */}
    <circle cx="18" cy="42" r="3" fill="#E53935" />
    <circle cx="30" cy="42" r="3" fill="#1565C0" />
    <circle cx="42" cy="42" r="3" fill="#43A047" />
    {/* Tips */}
    <circle cx="4" cy="14" r="3" fill="#FFE082" />
    <circle cx="30" cy="6" r="3" fill="#FFE082" />
    <circle cx="56" cy="14" r="3" fill="#FFE082" />
    <defs>
      <linearGradient id="crownGrad" x1="30" y1="6" x2="30" y2="42" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFE082" />
        <stop offset="1" stopColor="#FFB300" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

const CinnamonBun = () => (
  <svg viewBox="0 0 60 60" fill="none">
    {/* Outer spiral */}
    <circle cx="30" cy="30" r="26" fill="#D7A86E" />
    <circle cx="30" cy="30" r="22" fill="#C4956A" />
    {/* Spiral lines */}
    <path d="M30 8 C46 8, 52 16, 52 30 C52 42, 44 50, 30 50 C18 50, 12 42, 12 32 C12 22, 18 16, 26 16 C34 16, 38 22, 38 28 C38 34, 34 38, 30 38 C26 38, 24 34, 24 30" stroke="#8D6E63" strokeWidth="2.5" fill="none" />
    {/* Sugar/icing dots */}
    <circle cx="20" cy="20" r="2" fill="#FFECB3" />
    <circle cx="38" cy="22" r="2" fill="#FFECB3" />
    <circle cx="24" cy="40" r="2" fill="#FFECB3" />
    <circle cx="40" cy="36" r="2" fill="#FFECB3" />
    <circle cx="30" cy="30" r="2.5" fill="#FFECB3" />
  </svg>
);

const MexicanFlower = () => (
  <svg viewBox="0 0 50 50" fill="none">
    {/* Petals */}
    <ellipse cx="25" cy="12" rx="8" ry="10" fill="#FF4081" />
    <ellipse cx="25" cy="38" rx="8" ry="10" fill="#FF4081" />
    <ellipse cx="12" cy="25" rx="10" ry="8" fill="#E91E63" />
    <ellipse cx="38" cy="25" rx="10" ry="8" fill="#E91E63" />
    {/* Diagonal petals */}
    <ellipse cx="14" cy="14" rx="7" ry="9" fill="#F06292" transform="rotate(-45 14 14)" />
    <ellipse cx="36" cy="14" rx="7" ry="9" fill="#F06292" transform="rotate(45 36 14)" />
    <ellipse cx="14" cy="36" rx="7" ry="9" fill="#F06292" transform="rotate(45 14 36)" />
    <ellipse cx="36" cy="36" rx="7" ry="9" fill="#F06292" transform="rotate(-45 36 36)" />
    {/* Center */}
    <circle cx="25" cy="25" r="7" fill="#FFD700" />
    <circle cx="25" cy="25" r="4" fill="#FF6F00" />
  </svg>
);

/* ── Layout ── */

const icons: FloatingIcon[] = [
  // Scattered randomly across the whole page
  { svg: <Cactus />, x: '1%', y: '5%', size: 55, rotate: -8, delay: 0, duration: 7, drift: 8, opacity: 0.22 },
  { svg: <Sombrero />, x: '58%', y: '2%', size: 58, rotate: 10, delay: 0.5, duration: 7, drift: 7, opacity: 0.2 },
  { svg: <DalaHorse />, x: '10%', y: '68%', size: 50, rotate: -5, delay: 0.8, duration: 8, drift: 6, opacity: 0.2 },
  { svg: <Chili />, x: '35%', y: '14%', size: 36, rotate: 25, delay: 1.5, duration: 5.5, drift: 10, opacity: 0.18 },
  { svg: <VikingHelmet />, x: '68%', y: '38%', size: 48, rotate: -8, delay: 2, duration: 6.5, drift: 9, opacity: 0.18 },
  { svg: <MexicanFlower />, x: '14%', y: '38%', size: 34, rotate: 15, delay: 2.2, duration: 6, drift: 10, opacity: 0.17 },
  { svg: <Guitar />, x: '72%', y: '72%', size: 52, rotate: 18, delay: 1.8, duration: 7, drift: 6, opacity: 0.2 },
  { svg: <Crown />, x: '62%', y: '18%', size: 34, rotate: -12, delay: 3, duration: 5.5, drift: 10, opacity: 0.17 },
  { svg: <Maracas />, x: '78%', y: '55%', size: 40, rotate: 15, delay: 1, duration: 6, drift: 8, opacity: 0.2 },
  { svg: <SwedishFlag />, x: '22%', y: '4%', size: 34, rotate: -10, delay: 1.2, duration: 6, drift: 8, opacity: 0.17 },
  { svg: <Taco />, x: '38%', y: '82%', size: 46, rotate: -5, delay: 0.6, duration: 6.5, drift: 7, opacity: 0.2 },
  { svg: <CinnamonBun />, x: '5%', y: '50%', size: 32, rotate: 0, delay: 2.8, duration: 5.5, drift: 9, opacity: 0.17 },
  { svg: <Avocado />, x: '52%', y: '60%', size: 34, rotate: 10, delay: 3.2, duration: 6, drift: 8, opacity: 0.17 },
  { svg: <MexicanFlower />, x: '82%', y: '8%', size: 30, rotate: 20, delay: 2.5, duration: 5, drift: 10, opacity: 0.16 },
  { svg: <Chili />, x: '48%', y: '45%', size: 30, rotate: -20, delay: 3.5, duration: 5, drift: 8, opacity: 0.14 },
  { svg: <DalaHorse />, x: '85%', y: '85%', size: 42, rotate: 8, delay: 0.3, duration: 7.5, drift: 7, opacity: 0.16 },
];

export default function FiestaBackground() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        zIndex: 0,
      }}
    >
      {icons.map((icon, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            left: icon.x,
            top: icon.y,
            width: icon.size,
            height: icon.size,
            opacity: icon.opacity,
            rotate: icon.rotate,
          }}
          animate={{
            y: [-icon.drift, icon.drift, -icon.drift],
            x: [-icon.drift * 0.3, icon.drift * 0.3, -icon.drift * 0.3],
            rotate: [icon.rotate - 2, icon.rotate + 2, icon.rotate - 2],
          }}
          transition={{
            duration: icon.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: icon.delay,
          }}
        >
          {icon.svg}
        </motion.div>
      ))}
    </div>
  );
}
