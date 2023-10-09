import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgApexchartsModule } from 'ng-apexcharts';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HistoricalChartlineComponent } from './dashboards/historical-chartline/historical-chartline.component';
import { OperationsChartcardComponent } from './dashboards/operations-chartcard/operations-chartcard.component';

@NgModule({
  declarations: [
    AppComponent,
    HistoricalChartlineComponent,
    OperationsChartcardComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
