import { CounterState } from "../types/CounterState"
import { create } from 'zustand'


const useCounterStore = create<CounterState>((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  reset: () => set({ count: 0 }),
}))

export default useCounterStore