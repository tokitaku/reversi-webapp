import { connectMySQL } from "../../infrastructure/connection";
import {
  FindLastGamesQueryModel,
  FindLastGamesQueryService,
} from "../query/findLastGameQueryService";

const findCount = 10;

export class FindLastGameUseCase {
  constructor(private findLastGamesQueryService: FindLastGamesQueryService) {}

  async run(): Promise<FindLastGamesQueryModel[]> {
    const conn = await connectMySQL();
    try {
      return await this.findLastGamesQueryService.query(conn, findCount);
    } finally {
      await conn.end();
    }
  }
}
