import { CircularArray } from '../utils/CircularArray';

export interface StatisticsData {
  countRequest: number;
  countResponse: number;
  countError: number;
  countTimeMeasurement: number;
  timeMeasurementSeries: CircularArray<number>;
  currentTimeMeasurement: number;
  minTimeMeasurement: number;
  maxTimeMeasurement: number;
  totalTimeMeasurement: number;
  avgTimeMeasurement: number;
  medTimeMeasurement: number;
  ninetyFiveThPercentileTimeMeasurement: number;
  stdDevTimeMeasurement: number;
}

export default interface Statistics {
  id: string;
  statisticsData: Record<string, StatisticsData>;
}
