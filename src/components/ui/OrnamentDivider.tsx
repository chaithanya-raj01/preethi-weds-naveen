import React from 'react';

export default function OrnamentDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`ornament-divider ${className}`}>
      <div className="ornament-divider-dot"></div>
    </div>
  );
}
