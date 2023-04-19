export interface ValueAndError {
  value: string;
  error: boolean;
}
export interface IInitialState {
  bill: ValueAndError;
  tip: number | undefined;
  people: ValueAndError;
  tip_amount: undefined | number;
  total: undefined | number;
}
