export function HighlandPattern() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-5"
      preserveAspectRatio="none"
      viewBox="0 0 1440 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="highland-pattern"
          x="0"
          y="0"
          width="240"
          height="240"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M120 40C140 40 160 30 180 35C200 40 220 55 240 60V120C220 115 200 100 180 95C160 90 140 100 120 100C100 100 80 90 60 95C40 100 20 115 0 120V60C20 55 40 40 60 35C80 30 100 40 120 40Z"
            fill="currentColor"
            className="text-primary"
          />
          <path
            d="M120 160C140 160 160 150 180 155C200 160 220 175 240 180V240C220 235 200 220 180 215C160 210 140 220 120 220C100 220 80 210 60 215C40 220 20 235 0 240V180C20 175 40 160 60 155C80 150 100 160 120 160Z"
            fill="currentColor"
            className="text-secondary"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#highland-pattern)" />
    </svg>
  );
}

export function LochPattern() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-5"
      preserveAspectRatio="none"
      viewBox="0 0 1440 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="loch-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" className="text-primary/20" stopColor="currentColor" />
          <stop offset="100%" className="text-primary/5" stopColor="currentColor" />
        </linearGradient>
      </defs>
      <path
        d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        fill="url(#loch-gradient)"
      />
    </svg>
  );
}

export function HeatherPattern() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-5 pointer-events-none"
      preserveAspectRatio="none"
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="heather-pattern"
          x="0"
          y="0"
          width="50"
          height="50"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="10" cy="10" r="2" fill="currentColor" className="text-secondary" />
          <circle cx="25" cy="15" r="1.5" fill="currentColor" className="text-secondary" />
          <circle cx="40" cy="8" r="2" fill="currentColor" className="text-secondary" />
          <circle cx="15" cy="25" r="1.5" fill="currentColor" className="text-secondary" />
          <circle cx="35" cy="30" r="2" fill="currentColor" className="text-secondary" />
          <circle cx="5" cy="35" r="1.5" fill="currentColor" className="text-secondary" />
          <circle cx="20" cy="40" r="2" fill="currentColor" className="text-secondary" />
          <circle cx="45" cy="42" r="1.5" fill="currentColor" className="text-secondary" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#heather-pattern)" />
    </svg>
  );
}

export function MunroPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-5">
      <svg
        className="absolute bottom-0 w-full"
        preserveAspectRatio="none"
        viewBox="0 0 1440 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,224L60,213.3C120,203,240,181,360,181.3C480,181,600,203,720,218.7C840,235,960,245,1080,234.7C1200,224,1320,192,1380,176L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          fill="currentColor"
          className="text-primary"
        />
        <path
          d="M0,288L60,277.3C120,267,240,245,360,234.7C480,224,600,224,720,234.7C840,245,960,267,1080,272C1200,277,1320,267,1380,261.3L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          fill="currentColor"
          className="text-primary/50"
        />
      </svg>
    </div>
  );
}
