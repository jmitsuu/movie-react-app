import { create } from "zustand";
type Store = {
  count: number;
  inc: () => void;
  modalSearch: boolean;
  setModalSearch: (isOpen: boolean) => void;
  findMovie: string;
  setFindMovie: (movie: string) => void;
  searchMovie: () => void;
};

export const useStore = create<Store>((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
  modalSearch: false,
  setModalSearch: (isOpen: boolean) => set({ modalSearch: isOpen }),
  findMovie: "",
  setFindMovie: (movie: string) => set({ findMovie: movie }), 
  searchMovie: () => {
    set((state) => {
      if (state.findMovie) {
        state.setModalSearch(true); 
      }
      return state;
    });
  },
}));