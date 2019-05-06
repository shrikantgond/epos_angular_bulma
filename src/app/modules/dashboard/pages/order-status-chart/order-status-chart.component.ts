import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-order-status-chart',
  templateUrl: './order-status-chart.component.html',
  styleUrls: ['./order-status-chart.component.scss']
})
export class OrderStatusChartComponent implements OnInit {


  Highcharts = Highcharts; // required
  chartConstructor = 'chart'; // optional string, defaults to 'chart'
  chartOptions = {

    chart: {
      type: 'bar'
    },
    title: {
      text: 'Order Status'
    },
    // subtitle: {
    //   text: 'Source: <a href="https://en.wikipedia.org/wiki/World_population">Wikipedia.org</a>'
    // },
    xAxis: {
      categories: ['Table', 'Take Away', 'Online', 'Third Party', 'Corporate'],
      title: {
        text: null
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Price',
        align: 'high'
      },
      labels: {
        overflow: 'justify'
      }
    },
    tooltip: {
      valueSuffix: ' Rupees'
    },
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true
        }
      }
    },

    credits: {
      enabled: false
    },
    series: [{
      name: 'Sales',
      data: [107, 31, 635, 203, 2]
    }]

  }; // required

  chartCallback = function (chart) {
    //console.log(chart);
  } // optional function, defaults to null
  updateFlag = false; // optional boolean
  oneToOneFlag = true; // optional boolean, defaults to false
  runOutsideAngular = false; // optional boolean, defaults to false




  constructor() { }

  ngOnInit() {
  }

}
