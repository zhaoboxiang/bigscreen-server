import express, { Express, Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import { NOT_FOUND } from "http-status-codes";
import HttpException from "./exceptions/HTTPException";
import errorMiddleware from "./middlewares/error-middleware";
import * as userController from "./controllers/user";
import * as districtRanking from "./controllers/air/districtRanking";
import cors from "cors";

const app: Express = express();
// const cors = require("cors");
const port: any = process.env.PORT || 8989;

/** 解析请求body
 *reference to bodyParser.json
 *express 已经集成了bodyParser，不用额外安装
 */
app.use(express.json());
app.use(cors());

app.get("/", (_req: Request, res: Response) => {
  res.send("hell world");
});

app.post("/user/register", userController.postRegister);

app.post(
  "/big/air/queryAirMonitorDistrictHourRankingList",
  districtRanking.postDistrictRanking
);

// 错误处理
app.use((_req: Request, _res: Response, next: NextFunction) => {
  const error = new HttpException(NOT_FOUND, "Router not found");
  next(error); /* 传递给下一中间件输出错误消息 */
});
// 使用错误处理中间件
app.use(errorMiddleware);

const main = async () => {
  // 连接数据库
  await mongoose.connect("mongodb://localhost:27017/bigscreen", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  // 监听端口
  app.listen(port, () => {
    console.log(`Server run on http://localhost:${port}`);
  });
};

main();
