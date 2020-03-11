import { Request, Response, NextFunction } from "express";
import DistrictRanking, {
  IDistrictRanking
} from "../../models/DistrictRanking";

export const postDistrictRanking = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log(req.body);

    const newDistrictRanking: IDistrictRanking = new DistrictRanking({
      cityCode: "3204",
      cityName: "常州",
      provinceCode: "32",
      provinceName: "江苏",
      district_code: "320481",
      district_name: "溧阳市",
      longitude: 222,
      latitude: 333,
      aqi: "184",
      aqiLevel: "重度污染",
      aqiType: "不知道",
      primaryPollutant: "PM2.5",
      monitorHour: "2",
      ranking: 10,
      pm10: "22",
      pm10Aqi: "53",
      pm25: "66",
      pm25Aqi: "90",
      no: "33",
      noAqi: "34",
      co: "26",
      coAqi: "66",
      no2: "36",
      no2Aqi: "32",
      so2: "26",
      so2Aqi: "12",
      o3: "23",
      o3Aqi: "44"
    });

    const resDistrictRanking: IDistrictRanking = await newDistrictRanking.save();

    res.json({
      code: "000000",
      mesg: "success",
      data: [resDistrictRanking]
    });
  } catch (error) {
    next(error);
  }
};
