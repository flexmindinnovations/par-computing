import { useEffect } from 'react';
import type { ReactNode } from 'react';
import { useThemeStore } from '@/theme/themeStore';
import './theme.css';

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const { theme } = useThemeStore();
  
  // Apply theme to document
  useEffect(() => {
    // Remove both themes first
    document.documentElement.removeAttribute('data-theme');
    
    // Then apply the current theme
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
    
    // Update meta theme-color for mobile browsers
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute(
        'content',
        theme === 'dark' ? '#121212' : '#ffffff'
      );
    }
  }, [theme]);

  return <>{children}</>;
};
