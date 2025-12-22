export const WinnerDisc = {
  Black: 1,
  Light: 2,
  Draw: 3,
} as const;

export type WinnerDisc = (typeof WinnerDisc)[keyof typeof WinnerDisc];
