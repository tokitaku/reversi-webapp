import express from "express";
import morgan from "morgan";
import mysql from "mysql2/promise";
import "express-async-errors";

const port = process.env.PORT || 3000;
const app = express();
app.use(morgan("dev"));
app.use(express.static("static", { extensions: ["html"] }));

app.get("/api/hello", async (req, res) => {
  res.json({ message: "Hello, World!!!!!!!" });
});

app.get("/api/error", async (req, res) => {
  throw new Error("This is a test error");
});

app.post("/api/games", async (req, res) => {
  const startAt = new Date();
  const conn = await mysql.createConnection({
    host: "localhost",
    user: "reversi",
    password: "password",
    database: "reversi",
  });
  try {
    await conn.beginTransaction();
    await conn.execute("INSERT INTO games (started_at) VALUES (?)", [startAt]);
    await conn.commit();
  } finally {
    await conn.end();
  }

  res.status(201).end();
});

app.use(errorHandler);

function errorHandler(
  err: Error,
  req: express.Request,
  res: express.Response,
  _next: express.NextFunction
) {
  console.error(err.stack);
  res.status(500).json({ error: err.message });
}

app.listen(port, () => {
  console.log(`Server is running on: http://localhost:${port}`);
});
