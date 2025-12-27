import express from "express";
import { StartNewGameUseCase } from "../application/useCase/startNewGameUseCase";
import { GameMySQLRepository } from "../infrastructure/repository/game/gameMySQLRepository";
import { TurnMySQLRepository } from "../infrastructure/repository/turn/turnMySQLRepository";
import { FindLastGameMySQLQueryService } from "../infrastructure/query/findLastGamesMySQLQuery";
import { FindLastGameUseCase } from "../application/useCase/findLastGameUseCase";

export const gameRouter = express.Router();

const startNewGameUseCase = new StartNewGameUseCase(
  new GameMySQLRepository(),
  new TurnMySQLRepository()
);

const findLastGameUseCase = new FindLastGameUseCase(
  new FindLastGameMySQLQueryService()
);

interface GetGamesReponseBody {
  games: {
    gameId: number;
    darkMoveCount: number;
    lightMoveCount: number;
    winnerDisk: number;
    startedAt: Date;
    endedAt: Date;
  }[];
}

gameRouter.get(
  "/api/games",
  async (req, res: express.Response<GetGamesReponseBody>) => {
    const output = await findLastGameUseCase.run();
    const responseBody = {
      games: output.map((g) => ({
        gameId: g.gameId,
        darkMoveCount: g.darkMoveCount,
        lightMoveCount: g.lightMoveCount,
        winnerDisk: g.winnerDisk,
        startedAt: g.startedAt,
        endedAt: g.endedAt,
      })),
    };
    res.status(200).json(responseBody);
  }
);

gameRouter.post("/api/games", async (req, res) => {
  await startNewGameUseCase.run();
  res.status(201).end();
});
