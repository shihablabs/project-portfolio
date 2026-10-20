"use client";

interface SectionBadgeProps {
  num: string;
  label: string;
  className?: string;
  isFilled?: boolean;
}

// Reusable section badge
export default function SectionBadge({
  num,
  label,
  className = "",
  isFilled = false,
}: SectionBadgeProps) {
  // Break on <br>, \n or automatically break "DESIGN APPROACH"
  const rawLabel =
    label === "DESIGN APPROACH" ? "DESIGN\nAPPROACH" : label;
  const lines = rawLabel
    .split(/\n|<br\s*\/?>/i)
    .map((l) => l.trim())
    .filter(Boolean);
  const isMultiLine = lines.length > 1;

  const safeLabel = rawLabel.replace(/[\s\n<>/]+/g, "-");
  const labelGradId = `badge-label-grad-${num}-${safeLabel}`;

  // Find longest line to compute width
  const maxLineLength = Math.max(
    ...lines.map((l) => l.length),
    num.length * 2
  );

  // 180 for standard length (<= 7 chars like ABOUT, WORK, BLOGS, CONTACT, PROFILE, JOURNEY, DESIGN, APPROACH)
  const viewBoxWidth =
    maxLineLength > 7 ? Math.max(180, Math.ceil(maxLineLength * 25)) : 180;

  // ViewBox height: 180 for single-line, 215 for two lines
  const viewBoxHeight = isMultiLine ? 215 : 180;

  // Center coordinate for SVG middle alignment
  const centerX = viewBoxWidth / 2;

  return (
    <div
      className={`flex flex-col justify-center items-center text-center select-none ${className}`}
    >
      <svg
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
        className={`${
          isMultiLine
            ? "h-[155px] sm:h-[180px] lg:h-[195px]"
            : "h-[130px] sm:h-[155px] lg:h-[170px]"
        } w-auto max-w-full overflow-visible`}
      >
        <defs>
          {/* Figma lightline Linear Gradient */}
          <linearGradient id={labelGradId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(254, 193, 99, 1)" />
            <stop offset="100%" stopColor="rgba(222, 67, 19, 1)" />
          </linearGradient>
        </defs>

        {/* Soft Concert One number - perfectly centered */}
        <text
          x={centerX}
          y="110"
          textAnchor="middle"
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

        {/* Crisp Almarai text: 48px/42px lightline - perfectly centered */}
        {lines.map((line, idx) => (
          <text
            key={idx}
            x={centerX}
            y={isMultiLine ? 152 + idx * 42 : 158}
            textAnchor="middle"
            fill={isFilled ? `url(#${labelGradId})` : "none"}
            stroke={isFilled ? "none" : `url(#${labelGradId})`}
            strokeWidth={isFilled ? "0" : "1.5"}
            fontFamily="var(--font-almarai), sans-serif"
            fontWeight="700"
            fontSize={isMultiLine ? "42" : "48"}
            letterSpacing="0"
          >
            {line}
          </text>
        ))}
      </svg>
    </div>
  );
}
