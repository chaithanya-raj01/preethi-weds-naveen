export default function DeepamIcon({ className = '' }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 48 48" 
      fill="currentColor" 
      className={`w-full h-full ${className}`}
    >
      {/* Flame - Breathing glow */}
      <path 
        className="animate-[gentle-pulse_4s_ease-in-out_infinite] origin-bottom text-secondary-fixed" 
        d="M24 6C24 6 18 16 18 24C18 27.3137 20.6863 30 24 30C27.3137 30 30 27.3137 30 24C30 16 24 6 24 6Z" 
      />
      {/* Inner Flame Glow */}
      <path 
        className="animate-[gentle-pulse_3s_ease-in-out_infinite] origin-bottom text-white opacity-80" 
        style={{ animationDelay: '500ms' }}
        d="M24 14C24 14 21 21 21 25C21 26.6569 22.3431 28 24 28C25.6569 28 27 26.6569 27 25C27 21 24 14 24 14Z" 
      />
      
      {/* Lamp Body (Diyya) */}
      <path 
        className="text-secondary-fixed-dim"
        d="M8 28C8 28 14 36 24 36C34 36 40 28 40 28C38 31 32 34 24 34C16 34 10 31 8 28Z" 
      />
      <path 
        className="text-secondary-fixed"
        d="M12 30C12 30 16 42 24 42C32 42 36 30 36 30C36 30 30 38 24 38C18 38 12 30 12 30Z" 
      />
      <circle cx="24" cy="38" r="2" className="text-secondary-fixed" />
      <circle cx="18" cy="34" r="1.5" className="text-secondary-fixed" />
      <circle cx="30" cy="34" r="1.5" className="text-secondary-fixed" />
    </svg>
  );
}
