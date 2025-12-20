import { Board, initialBoard } from "./board";
import { Disc } from "./disc";
import { Move } from "./move";
import { Point } from "./point";

export class Turn {
  constructor(
    private _gameId: number,
    private _turnCount: number,
    private _nextDisc: Disc,
    private _move: Move | undefined,
    private _board: Board,
    private _endAt: Date
  ) {}

  placeNext(disc: Disc, point: Point): Turn {
    // 打とうとした石が、次の石ではない場合、置くことはできない
    if (disc !== this._nextDisc) {
      throw new Error("It's not your turn to place this disc.");
    }

    const move = new Move(disc, point);

    const newBoard = this._board.place(move);

    // TODO 次の石が置けない場合はスキップする処理
    const _nextDisc = disc === Disc.Black ? Disc.Light : Disc.Black;

    return new Turn(
      this._gameId,
      this._turnCount + 1,
      _nextDisc,
      move,
      newBoard,
      new Date()
    );
  }

  get gameId(): number {
    return this._gameId;
  }

  get turnCount(): number {
    return this._turnCount;
  }

  get nextDisc(): Disc {
    return this._nextDisc;
  }

  get move(): Move | undefined {
    return this._move;
  }

  get board(): Board {
    return this._board;
  }

  get endAt(): Date {
    return this._endAt;
  }
}

export function firtsTurn(gameId: number, endAt: Date): Turn {
  return new Turn(gameId, 0, Disc.Black, undefined, initialBoard, endAt);
}
