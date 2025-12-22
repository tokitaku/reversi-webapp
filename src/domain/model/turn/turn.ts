import { DomainError } from "../../error/domainError";
import { Board, initialBoard } from "./board";
import { Disc } from "./disc";
import { Move } from "./move";
import { Point } from "./point";

export class Turn {
  constructor(
    private _gameId: number,
    private _turnCount: number,
    private _nextDisc: Disc | undefined,
    private _move: Move | undefined,
    private _board: Board,
    private _endAt: Date
  ) {}

  placeNext(disc: Disc, point: Point): Turn {
    // 打とうとした石が、次の石ではない場合、置くことはできない
    if (disc !== this._nextDisc) {
      throw new DomainError(
        "SelectedDiscIsNotNextDisc",
        "It's not your turn to place this disc."
      );
    }

    const move = new Move(disc, point);

    const newBoard = this._board.place(move);

    const nextDisc = this.decideNextDisc(newBoard, disc);

    return new Turn(
      this._gameId,
      this._turnCount + 1,
      nextDisc,
      move,
      newBoard,
      new Date()
    );
  }

  private decideNextDisc(board: Board, previousDisc: Disc): Disc | undefined {
    const existDarkValidMove = board.existValidMove(Disc.Black);
    const existLightValidMove = board.existValidMove(Disc.Light);

    if (existDarkValidMove && existLightValidMove) {
      // 両方置ける場合は、交互に
      return previousDisc === Disc.Black ? Disc.Light : Disc.Black;
    } else if (!existDarkValidMove && !existLightValidMove) {
      // 両方置けない場合は、ゲーム終了
      return undefined;
    } else if (existDarkValidMove) {
      return Disc.Black;
    } else {
      return Disc.Light;
    }
  }

  get gameId(): number {
    return this._gameId;
  }

  get turnCount(): number {
    return this._turnCount;
  }

  get nextDisc(): Disc | undefined {
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
