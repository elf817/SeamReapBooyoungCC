"use client";

interface CourseTabsProps {
  nine: "out" | "in";
  onChange: (nine: "out" | "in") => void;
  summary: string;
}

export default function CourseTabs({ nine, onChange, summary }: CourseTabsProps) {
  const tabs: { id: "out" | "in"; label: string }[] = [
    { id: "out", label: "우정코스 · 1–9홀" },
    { id: "in", label: "사랑코스 · 10–18홀" },
  ];

  return (
    <div className="sticky top-[65px] sm:top-[89px] z-40 bg-bg border-b border-deep/[0.12]">
      <div className="flex flex-wrap items-center justify-between gap-4 px-5 sm:px-12 py-4">
        <div className="flex gap-2.5">
          {tabs.map((tab) => {
            const active = nine === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onChange(tab.id)}
                className="px-5 py-2.5 text-[13.5px] border border-deep/20 whitespace-nowrap transition-colors"
                style={{
                  background: active ? "#1e3a2b" : "transparent",
                  color: active ? "#f6f4ee" : "#3d4438",
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
        <div className="text-[13px] text-muted-2 whitespace-nowrap">{summary}</div>
      </div>
    </div>
  );
}
