const MAP_QUERY = "Siem Reap Booyoung Country Club";

export default function GoogleMap({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <iframe
        src={`https://www.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&z=15&output=embed`}
        title="시엠립 부영 컨트리클럽 위치 지도"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0 w-full h-full border-0"
      />
    </div>
  );
}
