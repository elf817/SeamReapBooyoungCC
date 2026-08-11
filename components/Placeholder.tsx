interface PlaceholderProps {
  label: string;
  tone?: "light" | "dark";
  className?: string;
  minHeight?: number;
}

export default function Placeholder({ label, tone = "light", className = "", minHeight }: PlaceholderProps) {
  const isDark = tone === "dark";
  const stripe = isDark ? "rgba(255,255,255,0.06)" : "rgba(30,58,43,0.08)";
  const base = isDark ? "#2a4634" : "#dcd8ca";

  return (
    <div
      className={`relative flex items-start justify-end p-4 sm:p-6 overflow-hidden ${className}`}
      style={{
        backgroundColor: base,
        backgroundImage: `repeating-linear-gradient(135deg, ${stripe} 0 2px, transparent 2px 11px)`,
        minHeight,
      }}
    >
      <span
        className="font-mono text-right"
        style={{
          fontSize: 11,
          letterSpacing: "0.2em",
          color: isDark ? "rgba(246,244,238,0.4)" : "rgba(34,38,31,0.38)",
        }}
      >
        {label}
      </span>
    </div>
  );
}
