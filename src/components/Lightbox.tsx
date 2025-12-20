'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type LightboxContextValue = {
  openLightbox: (src: string, alt?: string) => void;
};

const LightboxContext = createContext<LightboxContextValue | null>(null);

export const LightboxProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [src, setSrc] = useState('');
  const [alt, setAlt] = useState('');

  const openLightbox = (imageSrc: string, imageAlt?: string) => {
    setSrc(imageSrc);
    setAlt(imageAlt ?? '');
    setOpen(true);
  };

  const close = () => setOpen(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        close();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <LightboxContext.Provider value={{ openLightbox }}>
      {children}
      {open && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={close}
        >
          <div
            className="relative max-w-5xl max-h-[85vh] w-full flex items-center justify-center clear-panel rounded-xl p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={src}
              alt={alt}
              className="max-h-[70vh] w-auto max-w-full object-contain rounded-lg"
            />
            <button
              type="button"
              onClick={close}
              className="absolute top-2 right-2 text-text-secondary hover:text-text transition-colors"
              aria-label="关闭图片"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </LightboxContext.Provider>
  );
};

export const useLightbox = () => {
  const context = useContext(LightboxContext);
  if (!context) {
    throw new Error('useLightbox must be used within a LightboxProvider');
  }
  return context;
};

type LightboxImageProps = React.ImgHTMLAttributes<HTMLImageElement>;

export const LightboxImage = ({ className = '', ...props }: LightboxImageProps) => {
  const { openLightbox } = useLightbox();

  return (
    <img
      {...props}
      onClick={() => props.src && openLightbox(props.src, props.alt)}
      className={`cursor-zoom-in rounded-lg border border-border/60 transition-transform hover:scale-[1.01] ${className}`}
    />
  );
};
