import { DomainError } from "../../error/domainError";

const MIN_POINT = 0;
const MAX_POINT = 7;
export class Point {
  constructor(private _x: number, private _y: number) {
    if (_x < MIN_POINT || _x > MAX_POINT) {
      throw new DomainError(
        "InvalidPoint",
        "x座標は${MIN_POINT}から${MAX_POINT}の間で指定してください"
      );
    }
    if (_y < MIN_POINT || _y > MAX_POINT) {
      throw new DomainError(
        "InvalidPoint",
        `y座標は${MIN_POINT}から${MAX_POINT}の間で指定してください`
      );
    }
  }

  get x(): number {
    return this._x;
  }

  get y(): number {
    return this._y;
  }
}
