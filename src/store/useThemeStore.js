import { create } from 'zustand'

export const useThemeStore = create((set) => ({
  modoOscuro: false,
  alternarTema: () => set((state) => ({ modoOscuro: !state.modoOscuro })),
}))