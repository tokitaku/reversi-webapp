import myslq from "mysql2/promise";
import { Game } from "./game";

export interface GameRepository {
  findLatest(conn: myslq.Connection): Promise<Game | undefined>;
  save(conn: myslq.Connection, game: Game): Promise<Game>;
}
