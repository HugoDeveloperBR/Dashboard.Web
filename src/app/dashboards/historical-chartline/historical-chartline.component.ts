import { Component, OnInit } from '@angular/core';
import * as ApexCharts from 'apexcharts';

import { ApexAxisChartSeries, ApexChart, ApexXAxis, ApexTitleSubtitle, ChartComponent } from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
}

@Component({
  selector: 'app-historical-chartline',
  templateUrl: './historical-chartline.component.html',
  styleUrls: ['./historical-chartline.component.scss']
})
export class HistoricalChartlineComponent implements OnInit {

  ngOnInit(): void {

    var options = {
      series: [{
        name: 'Contratos registrados',
        data: [31, 40, 28, 51, 42, 109, 100]
      }, {
        name: 'Contratos com inconsistências',
        data: [11, 32, 45, 32, 34, 52, 41]
      }],
      chart: {
        height: 350,
        type: 'area',
        fontFamily: 'Montserrat Regular, sans-serif',
        toolbar: { show: false },
        defaultLocale: 'pt-br',
        zoom: {
          enabled: false
        },
        locales: [
          {
            name: 'pt-br',
            options: {
              months: [
                'Janeiro',
                'Fevereiro',
                'Março',
                'Abril',
                'Maio',
                'Junho',
                'Julho',
                'Agosto',
                'Setembro',
                'Outubro',
                'Novembro',
                'Dezembro'
              ],
              shortMonths: [
                'Jan',
                'Fev',
                'Mar',
                'Abr',
                'Maio',
                'Jun',
                'Jul',
                'Ago',
                'Set',
                'Out',
                'Nov',
                'Dez',
              ],
              days: [
                'Domingo',
                'Segunda-feira',
                'Terça-feira',
                'Quarta-feira',
                'Quinta-feira',
                'Sexta-feira',
                'Sábado',
              ],
              shortDays: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']
            }
          }
        ]
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width: 3,
        dashArray: [0, 0, 5]
      },
      fill: {
        type: 'gradient',
        colors: ['#9EF19C', '#FFD78A', '#FEA481'],
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.6,
          opacityTo: 0.6,
          stops: [0, 90, 100]
        }
      },
      legend: {
        show: false
      },
      xaxis: {
        type: 'datetime',
        categories: ['2023-10-09', '2023-10-10', '2023-10-11', '2023-10-12', '2023-10-13', '2023-10-14', '2023-10-15']
      },
      markers: {
        hover: {
          size: 9
        }
      },
      tooltip: {
        theme: 'dark',
        shared: true,
        x: {
          format: 'dd - MMMM'
        },
        custom: function ({ series, seriesIndex, dataPointIndex, w }) {

          var recordsCount = series[seriesIndex][dataPointIndex];
          var color = w.globals.colors[seriesIndex];
          

          return (
            '<div style="width: 400px;padding: 15px;border-radius: 5px;">' +
                '<label style="font-weight: bold; color: #a3a3a3;"> 10 de outubro </label>' +
                '<div class="mt-2 mx-2">' +
                  '<div class="row">' +
                    '<div class="col-2">' +
                      '<div style="width: 36px; height: 16px; border-radius: 2px; background-color: ' +
                        color + 
                      '; margin-top:5px;"></div>' +
                    '</div>' +
                    '<div class="col-8">'+
                      '<label style="font-size: 16px;font-weight: bold;">Contrato registrado</label>' +
                    '</div>' +
                    '<div class="col-2"><span class="badge text-bg-secondary" style="font-size: 14px;">'+
                      recordsCount +
                    '</span></div>' +
                  '</div>' +
                  '<div class="row mt-2">' +
                    '<div class="col-2"></div>' +
                    '<div class="col-8">'+
                      '<label style="font-size: 16px;">Automatico</label>' +
                    '</div>' +
                    '<div class="col-2"><span class="badge text-bg-secondary" style="font-size: 14px;">3</span></div>' +
                  '</div>' +
                  '<div class="row mt-2">' +
                    '<div class="col-2"></div>' +
                    '<div class="col-8">'+
                      '<label style="font-size: 16px;">Manual</label>' +
                    '</div>' +
                    '<div class="col-2"><span class="badge text-bg-secondary" style="font-size: 14px;">7</span></div>' +
                  '</div>' +                                 
                  '</div>' + 
                '</div>'+
            '</div>'
          );
        }
      },
    };

    var chart = new ApexCharts(document.querySelector('#chart'), options);
    chart.render();
  }
}
