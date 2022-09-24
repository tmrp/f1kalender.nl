import create from 'zustand';
import { persist } from 'zustand/middleware';

type ThemeState = {
  theme: string;
  toggleTheme?: Function;
};

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: 'dark',
      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === 'light' ? 'dark' : 'light',
        })),
    }),
    {
      name: 'theme',
    }
  )
);
