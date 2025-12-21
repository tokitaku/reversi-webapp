export const Disc = {
  Empty: 0,
  Black: 1,
  Light: 2,
  Wall: 3,
} as const;

export type Disc = (typeof Disc)[keyof typeof Disc];

export function toDisc(value: number): Disc {
  return value as Disc;
}

export function isOppositeDisc(disc1: Disc, disc2: Disc): boolean {
  return (
    (disc1 === Disc.Black && disc2 === Disc.Light) ||
    (disc1 === Disc.Light && disc2 === Disc.Black)
  );
}
