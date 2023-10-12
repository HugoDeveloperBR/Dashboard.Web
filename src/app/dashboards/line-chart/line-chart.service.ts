import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Record } from './record.model';
import { RecordDetail } from './record-detail.model';

const PORT: number = 7175;
const PROTOCOL: string = 'https';

@Injectable({
  providedIn: 'root'
})
export class LineChartService {

  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/api/`;
  }

  getInterval(start: string, end: string): Observable<string[]> {

    let params = new HttpParams();
    params = params.append('startDate', start);
    params = params.append('endDate', end);

    return this.http.get<string[]>(`${this.baseUrl}dashboards/range`, { params: params })
      .pipe(
        tap(data => console.log('Intervals: ', JSON.stringify(data)))
      )
  }


  getRecords(start: string, end: string): Observable<Record[]> {

    let params = new HttpParams();
    params = params.append('startDate', start);
    params = params.append('endDate', end);

    return this.http.get<Record[]>(`${this.baseUrl}dashboards/records`, { params: params })
      .pipe(
        tap(data => console.log('Records: ', JSON.stringify(data)))
      )
  }
}
