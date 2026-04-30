type Props = { withWordmark?: boolean; size?: number; compact?: boolean };

export function Logo({ withWordmark = true, size = 28, compact = false }: Props) {
  return (
    <div className="flex items-center gap-3">
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        aria-label="Algo Tranqui Studio"
      >
        <line
          x1="24"
          y1="6"
          x2="8"
          y2="24"
          stroke="#C8F060"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <circle cx="25" cy="25" r="3.2" fill="#C8F060" />
      </svg>
      {withWordmark && (
        <div className="flex flex-col leading-none">
          <span
            className="font-display text-hueso text-[18px]"
            style={{ letterSpacing: "-2px" }}
          >
            algo tranqui
          </span>
          {!compact && (
            <span
              className="font-mono uppercase mt-1"
              style={{ fontSize: "9px", letterSpacing: "0.35em", color: "#888880" }}
            >
              studio
            </span>
          )}
        </div>
      )}
    </div>
  );
}
