import { WinnerDisc } from "./winnerDisc";

export class GameResult {
  constructor(
    private _gameId: number,
    private _winnerDisc: WinnerDisc,
    private _endAt: Date
  ) {}

  get winnerDisc(): WinnerDisc {
    return this._winnerDisc;
  }
  get gameId(): number {
    return this._gameId;
  }
  get endAt(): Date {
    return this._endAt;
  }
}
