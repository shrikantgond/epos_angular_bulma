import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-payment-summery-chart',
  templateUrl: './payment-summery-chart.component.html',
  styleUrls: ['./payment-summery-chart.component.scss']
})
export class PaymentSummeryChartComponent implements OnInit {



  Highcharts = Highcharts; // required
  chartConstructor = 'chart'; // optional string, defaults to 'chart'
  chartOptions = {

    chart: {
      type: 'bar'
    },
    title: {
      text: 'Payment Summery Chart'
    },
    // subtitle: {
    //   text: 'Source: <a href="https://en.wikipedia.org/wiki/World_population">Wikipedia.org</a>'
    // },
    xAxis: {
      categories: ['Cash', 'Card', 'Wallet', 'Credit'],
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
      data: [107, 31, 635, 203]
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
