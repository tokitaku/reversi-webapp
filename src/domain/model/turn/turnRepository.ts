import { Turn } from "./turn";
import myslq from "mysql2/promise";

export interface TurnRepository {
  findForGameIdAndTurnCount(
    conn: myslq.Connection,
    gameId: number,
    turnCount: number
  ): Promise<Turn>;

  save(conn: myslq.Connection, turn: Turn): Promise<void>;
}
