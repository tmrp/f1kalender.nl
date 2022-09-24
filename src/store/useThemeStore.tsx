import { h } from 'preact';
import create from 'zustand';
import { persist } from 'zustand/middleware';

interface ThemeState {
  theme: string;
  toggleTheme?: Function;
}

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

export const useToggleRaceDetails = create<any>()((set) => ({
  toggleSchema: null,
  handleSchemaClick: (event: any) => {
    set((state) => ({
      toggleSchema:
        event.target.value === state.toggleSchema ? null : event.target.value,
    }));
  },
}));
