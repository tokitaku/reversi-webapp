import { DomainError } from "../../error/domainError";

export const WinnerDisc = {
  Black: 1,
  Light: 2,
  Draw: 3,
} as const;

export type WinnerDisc = (typeof WinnerDisc)[keyof typeof WinnerDisc];

export function toWinnerDisc(value: any): WinnerDisc {
  if (!Object.values(WinnerDisc).includes(value)) {
    throw new DomainError(
      "InvalidWinnerDiscValue",
      "Invalid winner disc value"
    );
  }

  return value as WinnerDisc;
}
