export class TurnRecord {
  constructor(
    private _id: number,
    private _gameId: number,
    private _turnCount: number,
    private _nextDisc: number | undefined,
    private _endAt: Date
  ) {}

  get id(): number {
    return this._id;
  }

  get gameId(): number {
    return this._gameId;
  }

  get turnCount(): number {
    return this._turnCount;
  }

  get nextDisc(): number | undefined {
    return this._nextDisc;
  }

  get endAt(): Date {
    return this._endAt;
  }
}
