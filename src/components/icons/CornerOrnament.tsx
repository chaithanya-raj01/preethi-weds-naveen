export default function CornerOrnament({ className = '', position = 'top-left' }: { className?: string, position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' }) {
  let rotation = '';
  switch (position) {
    case 'top-right': rotation = 'rotate-90'; break;
    case 'bottom-right': rotation = 'rotate-180'; break;
    case 'bottom-left': rotation = '-rotate-90'; break;
    default: rotation = '';
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={`w-full h-full ${rotation} ${className}`}
      fill="none"
      stroke="currentColor"
    >
      {/* Decorative L border */}
      <path d="M 0 0 L 100 0" strokeWidth="2" strokeDasharray="4 4" />
      <path d="M 0 0 L 0 100" strokeWidth="2" strokeDasharray="4 4" />
      
      {/* Inner floral/arch corner element */}
      <path d="M 0 20 C 30 20, 20 30, 20 0" strokeWidth="1.5" className="opacity-80" />
      <path d="M 0 40 C 50 40, 40 50, 40 0" strokeWidth="1" className="opacity-60" />
      <path d="M 0 60 C 70 60, 60 70, 60 0" strokeWidth="0.5" className="opacity-40" />
      
      {/* Center dot */}
      <circle cx="15" cy="15" r="3" fill="currentColor" stroke="none" />
    </svg>
  );
}
