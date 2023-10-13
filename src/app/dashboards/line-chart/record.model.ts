import { RecordDetail } from "./record-detail.model";

export interface Record {
    name: string;
    values: number[];
    details: RecordDetail[];
    timeElapsed: string;
}