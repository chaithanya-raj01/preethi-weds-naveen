export default function KolamMotif({ className = '' }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={`w-full h-full ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <circle cx="50" cy="50" r="30" className="opacity-80" strokeDasharray="4 4" />
      <circle cx="50" cy="50" r="40" className="opacity-40" />
      <circle cx="50" cy="50" r="48" className="opacity-20" />
      
      {/* 4 Cardinal Dots */}
      <circle cx="50" cy="15" r="3" fill="currentColor" className="opacity-90" />
      <circle cx="50" cy="85" r="3" fill="currentColor" className="opacity-90" />
      <circle cx="15" cy="50" r="3" fill="currentColor" className="opacity-90" />
      <circle cx="85" cy="50" r="3" fill="currentColor" className="opacity-90" />
      
      {/* Inner star pattern */}
      <path
        d="M 50 30 L 60 40 L 70 50 L 60 60 L 50 70 L 40 60 L 30 50 L 40 40 Z"
        className="opacity-50"
      />
    </svg>
  );
}
