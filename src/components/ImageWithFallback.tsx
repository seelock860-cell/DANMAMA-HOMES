import { Building2 } from 'lucide-react';
import { useState } from 'react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
}

export function ImageWithFallback({
  src,
  alt,
  className = '',
  fallbackTitle,
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#0B172A] via-[#132542] to-[#1D3559] p-6 text-center text-white ${className}`}
        role="img"
        aria-label={alt}
      >
        <Building2 className="mb-3 h-8 w-8 text-[#D4B062]" aria-hidden="true" />
        <p className="font-display text-lg font-semibold tracking-wide text-white">
          {fallbackTitle || 'DANMAMA HOMES'}
        </p>
        <p className="mt-1 text-xs text-slate-300">Architectural Presentation</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
