"use client";

interface SectionBadgeProps {
  num: string;
  label: string;
  className?: string;
}

// Reusable section badge
export default function SectionBadge({
  num,
  label,
  className = "",
}: SectionBadgeProps) {
  const labelGradId = `badge-label-grad-${num}-${label}`;

  return (
    <div
      className={`flex flex-col justify-center text-center items-start  select-none ${className}`}
    >
      <svg
        viewBox="0 0 180 180"
        className="w-[140px] sm:w-[165px] lg:w-[175px] h-auto overflow-visible"
      >
        <defs>
          {/* Figma lightline Linear Gradient */}
          <linearGradient id={labelGradId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(254, 193, 99, 1)" />
            <stop offset="100%" stopColor="rgba(222, 67, 19, 1)" />
          </linearGradient>
        </defs>

        {/* Soft Concert One number */}
        <text
          x="0"
          y="110"
          fill="none"
          stroke="#DE4313"
          strokeOpacity="0.4"
          strokeWidth="1.5"
          fontFamily="var(--font-concert-one), cursive"
          fontSize="140"
          letterSpacing="0.02em"
        >
          {num}
        </text>

        {/* Crisp Almarai text: 48px, 1.5px lightline */}
        <text
          x="0"
          y="158"
          fill="none"
          stroke={`url(#${labelGradId})`}
          strokeWidth="1.5"
          fontFamily="var(--font-almarai), sans-serif"
          fontWeight="700"
          fontSize="48"
          letterSpacing="0"
        >
          {label}
        </text>
      </svg>
    </div>
  );
}
