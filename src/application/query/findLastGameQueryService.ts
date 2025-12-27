import mysql from "mysql2/promise";

export class FindLastGamesQueryModel {
  constructor(
    private _gameId: number,
    private _darkMoveCount: number,
    private _lightMoveCount: number,
    private _winnerDisk: number,
    private _startedAt: Date,
    private _endedAt: Date
  ) {}

  get gameId() {
    return this._gameId;
  }

  get darkMoveCount() {
    return this._darkMoveCount;
  }

  get lightMoveCount() {
    return this._lightMoveCount;
  }

  get winnerDisk() {
    return this._winnerDisk;
  }

  get startedAt() {
    return this._startedAt;
  }

  get endedAt() {
    return this._endedAt;
  }
}

export interface FindLastGamesQueryService {
  query(
    conn: mysql.Connection,
    limit: number
  ): Promise<FindLastGamesQueryModel[]>;
}
