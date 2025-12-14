export class SquareRecord {
  constructor(
    private _id: number,
    private _turnId: number,
    private _x: number,
    private _y: number,
    private _disc: number
  ) {}

  get id(): number {
    return this._id;
  }

  get turnId(): number {
    return this._turnId;
  }
  get x(): number {
    return this._x;
  }
  get y(): number {
    return this._y;
  }
  get disc(): number {
    return this._disc;
  }
}
