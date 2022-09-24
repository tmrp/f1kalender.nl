import { FunctionComponent, h, render } from 'preact';
import { useEffect, useState } from 'preact/hooks';

import { useThemeStore } from '../store/useThemeStore';
import { applyThemePreference } from '../utils/theme-utils';

export default function ToggleTheme() {
  const [loaded, setLoaded] = useState(false);
  const { toggleTheme, theme } = useThemeStore();

  const handleToggleTheme = () => {
    toggleTheme();
    // themeToggle.set(themeToggle.get() === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    setLoaded(true);
    applyThemePreference(theme as 'light' | 'dark');
  }, [theme, loaded]);

  if (!loaded)
    return (
      <span className="dark:text-white text-4xl">...loading theme button</span>
    );

  return (
    <button className="fit-content ml-auto mr-0" onClick={handleToggleTheme}>
      <span className="dark:text-white text-4xl">
        {/* {theme === 'dark' ? '🌝' : '🌞'} */}
        {/* button */}
      </span>
    </button>
  );
}
