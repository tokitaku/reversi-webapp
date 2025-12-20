import { Disc } from "./disc";
import { Move } from "./move";

export class Board {
  constructor(private _discs: Disc[][]) {}

  place(move: Move): Board {
    // TODO 盤面におけるかチェック

    // 盤面をコピー
    const newDiscs = this._discs.map((line) => {
      return line.map((disc) => disc);
    });

    // 石を置く
    newDiscs[move.point.y][move.point.x] = move.disc;

    // TODO ひっくり返す

    return new Board(newDiscs);
  }

  get discs() {
    return this._discs;
  }
}

const E = Disc.Empty;
const B = Disc.Black;
const L = Disc.Light;

const INITIAL_BOARD = [
  [E, E, E, E, E, E, E, E],
  [E, E, E, E, E, E, E, E],
  [E, E, E, E, E, E, E, E],
  [E, E, E, B, L, E, E, E],
  [E, E, E, L, B, E, E, E],
  [E, E, E, E, E, E, E, E],
  [E, E, E, E, E, E, E, E],
  [E, E, E, E, E, E, E, E],
];

export const initialBoard = new Board(INITIAL_BOARD);
