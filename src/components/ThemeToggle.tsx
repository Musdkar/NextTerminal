'use client';

import { useTheme } from './ThemeProvider';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`切换到${isDark ? '浅色' : '深色'}模式`}
      className="flex items-center gap-2 rounded-full border border-border/70 bg-surface/70 px-3 py-1.5 text-sm font-medium text-text shadow-sm backdrop-blur transition hover:border-accent hover:text-accent"
    >
      {isDark ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.364 6.364-1.414-1.414M6.05 6.05 4.636 4.636m12.728 0-1.414 1.414M6.05 17.95 4.636 19.364" />
        </svg>
      )}
      <span className="hidden sm:inline">{isDark ? '深色' : '浅色'}</span>
    </button>
  );
};

export default ThemeToggle;
