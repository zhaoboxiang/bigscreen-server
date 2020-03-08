import express, { Express, Request, Response } from "express";

const app: Express = express();
const port: any = process.env.PORT || 8989;

app.get("/", (_req: Request, res: Response) => {
  res.send("hell world");
});

const main = () => {
  app.listen(port, () => {
    console.log(`Server run on http://localhost:${port}`);
  });
};

main();
