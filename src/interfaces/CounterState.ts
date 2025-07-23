export interface CounterState {
  count: number;
  max: number;
  increase: () => void;
  reset: () => void;
}
