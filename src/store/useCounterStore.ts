import { CounterState } from "../interfaces/CounterState";
import { create } from "zustand";
import { persist } from "zustand/middleware";
const useCounterStore = create<CounterState>()(
  persist(
    (set) => ({
      count: 0,
      max: 0,
      increase: () =>
        set((state) => {
          const newCount = state.count + 1;
          return {
            count: newCount,
            max: Math.max(state.max, newCount),
          };
        }),
      reset: () => set((state) => ({ count: 0, max: state.max })),
    }),
    {
      name: "counter-storage",
      partialize: (state) => ({ max: state.max }),
    }
  )
);

export default useCounterStore;
