import { Component, OnInit } from '@angular/core';
import { LineChartService } from '../line-chart/line-chart.service';
import { Consolidated } from './consolidated.model';

@Component({
  selector: 'app-box-chart',
  templateUrl: './box-chart.component.html',
  styleUrls: ['./box-chart.component.scss']
})
export class BoxChartComponent implements OnInit {

  consolidated: Consolidated;

  constructor(private lineChartService: LineChartService) { }  

  ngOnInit(): void {

    let start = '2023-10-01';
    let end = '2023-10-10'

    this.lineChartService.getConsolidated(start, end)
      .subscribe({
        next: (consolidated: Consolidated) => {
          this.consolidated = consolidated;
        }
      })

  }
}
