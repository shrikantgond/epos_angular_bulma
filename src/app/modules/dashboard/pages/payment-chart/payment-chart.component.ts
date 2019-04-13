import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-payment-chart',
  templateUrl: './payment-chart.component.html',
  styleUrls: ['./payment-chart.component.scss']
})
export class PaymentChartComponent implements OnInit {


  Highcharts = Highcharts; // required
  chartConstructor = 'chart'; // optional string, defaults to 'chart'
  chartOptions = {

    chart: {
      type: 'column'
    },
    title: {
      text: 'Payment Chart'
    },
    // subtitle: {
    //   text: 'Source: <a href="https://en.wikipedia.org/wiki/World_population">Wikipedia.org</a>'
    // },
    xAxis: {
      categories: ['10 AM', '11 AM', '12 AM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM'],
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
      data: [107, 31, 635, 203, 2, 133, 156, 947, 408, 6]
    }]

  }; // required

  chartCallback = function (chart) {
    console.log(chart);
  } // optional function, defaults to null
  updateFlag = false; // optional boolean
  oneToOneFlag = true; // optional boolean, defaults to false
  runOutsideAngular = false; // optional boolean, defaults to false




  constructor() { }

  ngOnInit() {
  }

}
