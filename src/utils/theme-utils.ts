// for tailwind css, need the change the root

export const applyThemePreference = (theme: 'light' | 'dark') => {
  const html = document.querySelector('html');
  const body = document.querySelector('body');
  const isDark = theme === 'dark';

  for (let index = 0; index < [html, body].length; index++) {
    const element = [html, body][index];

    element?.classList.remove(isDark ? 'light' : 'dark');
    element?.classList.add(theme);
  }
};
