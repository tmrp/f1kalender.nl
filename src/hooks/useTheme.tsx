import { h } from 'preact';
import { useEffect } from 'preact/hooks';
import { useThemeStore } from '../store/useThemeStore';
import { applyThemePreference } from '../utils/theme-utils';

export const useTheme = () => {
  const { theme } = useThemeStore();

  useEffect(() => {
    applyThemePreference(theme as 'light' | 'dark');
  }, [theme]);

  return theme;
};
