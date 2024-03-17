import { create } from 'zustand';

type LoadStoreType = {
  state: string[];
  update: (value: string) => void;
};

export const useLoad = create<LoadStoreType>((set) => ({
  state: [],
  update: (value) =>
    set((stt) => {
      if (!stt.state.find((st) => st === value)) {
        return {
          ...stt,
          state: [...stt.state, value],
        };
      } else {
        return stt;
      }
    }),
}));
