import { Schema, model, Model, Document } from "mongoose";

export interface IDistrictRanking extends Document {
  _doc: IDistrictRanking;

  cityCode: string;
  cityName: string;
  provinceCode: string;
  provinceName: string;
  district_code: string;
  district_name: string;
  longitude: Number;
  latitude: Number;
  aqi: string;
  aqiLevel: string;
  aqiType: string;
  primaryPollutant: string;
  monitorHour: string;
  ranking: number;
  pm10: string;
  pm10Aqi: string;
  pm25: string;
  pm25Aqi: string;
  no: string;
  noAqi: string;
  co: string;
  coAqi: string;
  no2: string;
  no2Aqi: string;
  so2: string;
  so2Aqi: string;
  o3: string;
  o3Aqi: string;
}

const districtSchema: Schema = new Schema(
  {
    cityCode: String,
    cityName: String,
    provinceCode: String,
    provinceName: String,
    district_code: String,
    district_name: String,
    longitude: Number,
    latitude: Number,
    aqi: String,
    aqiLevel: String,
    aqiType: String,
    primaryPollutant: String,
    monitorHour: String,
    ranking: Number,
    pm10: String,
    pm10Aqi: String,
    pm25: String,
    pm25Aqi: String,
    no: String,
    noAqi: String,
    co: String,
    coAqi: String,
    no2: String,
    no2Aqi: String,
    so2: String,
    so2Aqi: String,
    o3: String,
    o3Aqi: String
  },
  { timestamps: true }
);

const DistrictRanking: Model<IDistrictRanking> = model<IDistrictRanking>(
  "DistrictRanking",
  districtSchema
);

export default DistrictRanking;
