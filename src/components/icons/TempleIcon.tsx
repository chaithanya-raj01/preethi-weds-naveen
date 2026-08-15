export default function TempleIcon({ className = '' }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-full h-full ${className}`}>
      <path d="M12 2L9 6H4v2h2v12H4v2h16v-2h-2V8h2V6h-5l-3-4zm-4 6h8v10H8V8zm2 2v6h4v-6h-4zm1 2h2v2h-2v-2z" />
    </svg>
  );
}
