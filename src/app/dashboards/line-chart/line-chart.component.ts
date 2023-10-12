import { Component, OnInit } from '@angular/core';
import * as ApexCharts from 'apexcharts';
import { LineChartService } from './line-chart.service';
import { Record } from './record.model';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  intervals: string[] = [];

  constructor(private lineChartService: LineChartService) { }

  ngOnInit(): void {

    let start = '2023-10-01';
    let end = '2023-10-10'

    this.lineChartService.getInterval(start, end)
      .subscribe({
        next: (interval: string[]) => {
          options.xaxis = {
            type: 'datetime',
            categories: interval
          }


          this.lineChartService.getRecords(start, end)
            .subscribe({
              next: (records: Record[]) => {
                const result = records.map(record => ({
                  name: record.name,
                  data: record.values
                }))

                options.tooltip.custom = ({ series, seriesIndex, dataPointIndex, w }) => {

                  var recordsCount = series[seriesIndex][dataPointIndex];
                  var color = w.globals.colors[seriesIndex];
                  var name = w.config.series[seriesIndex].name;

                  //lista de detalhes: records[seriesIndex].details
                  //valor: records[seriesIndex].details[0].values[dataPointIndex]

                  console.log(dataPointIndex);
                  console.log(records[seriesIndex].details);
                  console.log(records[seriesIndex].details[0].values[dataPointIndex]);


                  let htmlTooltipDetails = '';

                  let details = records[seriesIndex].details;
                  console.log(details.length > 0);

                  if (details.length > 0) {

                    for (let i = 0; i < details.length; i++) {
                      let name = details[0].name;
                      let count = records[seriesIndex].details[i].values[dataPointIndex];

                      htmlTooltipDetails +=
                        '<div class="row mt-2">' +
                          '<div class="col-2"></div>' +
                          '<div class="col-8">' +
                            '<label style="font-size: 16px;">' +
                              name +
                            '</label>' +
                          '</div>' +
                          '<div class="col-2">' +
                            '<span class="badge text-bg-secondary" style="font-size: 14px;">' +
                              count +
                            '</span>' +
                          '</div>' +
                        '</div>'
                    }
                  }

                  let htmlTooltip = 
                    '<div style="width: 400px;padding: 15px;border-radius: 5px;">' +
                    '<label style="font-weight: bold; color: #a3a3a3;"> 10 de outubro </label>' +
                    '<div class="mt-2 mx-2">' +
                    '<div class="row">' +
                    '<div class="col-2">' +
                    '<div style="width: 36px; height: 16px; border-radius: 2px; background-color: ' +
                    color +
                    '; margin-top:5px;"></div>' +
                    '</div>' +
                    '<div class="col-8">' +
                    '<label style="font-size: 16px;font-weight: bold;">' +
                    name +
                    '</label>' +
                    '</div>' +
                    '<div class="col-2"><span class="badge text-bg-secondary" style="font-size: 14px;">' +
                    recordsCount +
                    '</span></div>' +
                    '</div>' +
                    htmlTooltipDetails +            
                    '</div>' +
                    '</div>' +
                    '</div>'

                  return htmlTooltip;
                }

                chart.updateOptions(options);
                chart.updateSeries(result)

                //atualizar o tooltip aqui com o updateOptions
              },
              error: err => console.error(err)
            })


        },
        error: err => console.error(err)
      });



    var options = {
      series: [],
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
          },
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
        categories: this.intervals
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

          // get specific values using this datas: name + date = 

          var name = w.config.series[seriesIndex].name;
          var date = w.config.xaxis.categories[dataPointIndex];

          //details: [1, 2, 4, 6,]

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
            '<div class="col-8">' +
            '<label style="font-size: 16px;font-weight: bold;">' +
            name +
            '</label>' +
            '</div>' +
            '<div class="col-2"><span class="badge text-bg-secondary" style="font-size: 14px;">' +
            recordsCount +
            '</span></div>' +
            '</div>' +
            '<div class="row mt-2">' +
            '<div class="col-2"></div>' +     
            '</div>' +        
            '</div>' +
            '</div>'
          );
        }
      },
    };

    var chart = new ApexCharts(document.querySelector('#chart'), options);
    chart.render();
  }
}
