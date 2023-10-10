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
    params = params.append('dataInicio', start);
    params = params.append('dataFim', end);

    return this.http.get<string[]>(`${this.baseUrl}dashboards/obter-intervalo`, { params: params })
      .pipe(
        tap(data => console.log('Intervals: ', JSON.stringify(data)))
      )
  }

  getSuccessfullyRecord(start: string, end: string): Observable<number[]> {

    let params = new HttpParams();
    params = params.append('dataInicio', start);
    params = params.append('dataFim', end);

    return this.http.get<number[]>(`${this.baseUrl}dashboards/contratos-registrados`, { params: params })
      .pipe(
        tap(data => console.log('Intervals: ', JSON.stringify(data)))
      )
  }

  getRecords(start: string, end: string): Observable<Record[]> {

    let params = new HttpParams();
    params = params.append('dataInicio', start);
    params = params.append('dataFim', end);

    return this.http.get<Record[]>(`${this.baseUrl}dashboards/obter-operacoes`, { params: params })
      .pipe(
        tap(data => console.log('Records: ', JSON.stringify(data)))
      )
  }

  getRecordDetails(name: string, date: string): Observable<RecordDetail[]> {

    let params = new HttpParams();
    params = params.append('nome', name);
    params = params.append('data', date);

    return this.http.get<RecordDetail[]>(`${this.baseUrl}dashboards/detalhe-registro`, { params: params })
      .pipe(
        tap(data => console.log('Details: ', JSON.stringify(data)))
      )
  }

}
