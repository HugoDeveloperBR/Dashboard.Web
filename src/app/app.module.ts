import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgApexchartsModule } from 'ng-apexcharts';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { LineChartComponent } from './dashboards/line-chart/line-chart.component';
import { BoxChartComponent } from './dashboards/box-chart/box-chart.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LineChartComponent,
    BoxChartComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    NgApexchartsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
