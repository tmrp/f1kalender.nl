import { h } from 'preact';
import create from 'zustand';

interface ToggleState {
  toggleState: boolean;
  setToggleState: (toggleState: boolean) => void;
}

export const useToggleState = create<ToggleState>()((set) => ({
  toggleState: false,
  setToggleState: (toggleState: boolean) => set({ toggleState }),
}));
