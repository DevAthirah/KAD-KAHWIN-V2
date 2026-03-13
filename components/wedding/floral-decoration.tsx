interface FloralDecorationProps {
  position: "top" | "bottom"
}

export function FloralDecoration({ position }: FloralDecorationProps) {
  const isTop = position === "top"
  
  return (
    <svg 
      className={`w-full max-w-md h-auto ${isTop ? "" : "rotate-180"}`}
      viewBox="0 0 400 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main floral arrangement */}
      <g opacity="0.9">
        {/* Left rose */}
        <circle cx="80" cy="60" r="20" fill="oklch(0.85 0.1 350)" />
        <circle cx="75" cy="55" r="12" fill="oklch(0.88 0.08 350)" />
        <circle cx="85" cy="65" r="10" fill="oklch(0.82 0.12 350)" />
        <circle cx="80" cy="60" r="6" fill="oklch(0.9 0.06 350)" />
        
        {/* Center rose - larger */}
        <circle cx="200" cy="50" r="28" fill="oklch(0.83 0.11 350)" />
        <circle cx="193" cy="43" r="16" fill="oklch(0.87 0.09 350)" />
        <circle cx="207" cy="57" r="14" fill="oklch(0.8 0.13 350)" />
        <circle cx="200" cy="50" r="8" fill="oklch(0.92 0.05 350)" />
        
        {/* Right rose */}
        <circle cx="320" cy="60" r="20" fill="oklch(0.85 0.1 350)" />
        <circle cx="325" cy="55" r="12" fill="oklch(0.88 0.08 350)" />
        <circle cx="315" cy="65" r="10" fill="oklch(0.82 0.12 350)" />
        <circle cx="320" cy="60" r="6" fill="oklch(0.9 0.06 350)" />
        
        {/* Small accent flowers */}
        <circle cx="130" cy="75" r="8" fill="oklch(0.8 0.08 320)" />
        <circle cx="270" cy="75" r="8" fill="oklch(0.8 0.08 320)" />
        <circle cx="160" cy="55" r="6" fill="oklch(0.85 0.06 320)" />
        <circle cx="240" cy="55" r="6" fill="oklch(0.85 0.06 320)" />
        
        {/* Leaves */}
        <ellipse cx="50" cy="85" rx="20" ry="8" fill="oklch(0.7 0.12 145)" transform="rotate(-30 50 85)" />
        <ellipse cx="60" cy="100" rx="18" ry="7" fill="oklch(0.65 0.1 145)" transform="rotate(-45 60 100)" />
        <ellipse cx="350" cy="85" rx="20" ry="8" fill="oklch(0.7 0.12 145)" transform="rotate(30 350 85)" />
        <ellipse cx="340" cy="100" rx="18" ry="7" fill="oklch(0.65 0.1 145)" transform="rotate(45 340 100)" />
        
        {/* Center leaves */}
        <ellipse cx="170" cy="90" rx="15" ry="6" fill="oklch(0.68 0.11 145)" transform="rotate(-20 170 90)" />
        <ellipse cx="230" cy="90" rx="15" ry="6" fill="oklch(0.68 0.11 145)" transform="rotate(20 230 90)" />
        
        {/* Small buds */}
        <circle cx="100" cy="95" r="5" fill="oklch(0.9 0.05 350)" />
        <circle cx="300" cy="95" r="5" fill="oklch(0.9 0.05 350)" />
        
        {/* Decorative dots */}
        <circle cx="140" cy="100" r="3" fill="oklch(0.75 0.08 350)" />
        <circle cx="180" cy="105" r="2" fill="oklch(0.75 0.08 350)" />
        <circle cx="220" cy="105" r="2" fill="oklch(0.75 0.08 350)" />
        <circle cx="260" cy="100" r="3" fill="oklch(0.75 0.08 350)" />
      </g>
    </svg>
  )
}
