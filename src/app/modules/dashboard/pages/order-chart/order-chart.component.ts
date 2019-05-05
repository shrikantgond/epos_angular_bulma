import { Component, OnInit, OnDestroy } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Observable } from 'rxjs';
import { ApplicationState } from 'src/app/store/root.state';
import { Store } from '@ngrx/store';
import { IChartModel } from 'src/app/models/order-chart.model';
import { LoadDashboard } from 'src/app/store/dashboard-store/dashboard-store.actions';
import { Dashboard } from 'src/app/store/dashboard-store/dashboard-store';

@Component({
  selector: 'app-order-chart',
  templateUrl: './order-chart.component.html',
  styleUrls: ['./order-chart.component.scss']
})
export class OrderChartComponent implements OnInit,OnDestroy {

  chart$: Observable<Dashboard>;

  Highcharts = Highcharts; // required
  chartConstructor = 'chart'; // optional string, defaults to 'chart'
  chartOptions = {
    chart: { type: 'column' },
    title: { text: 'Payment Chart' },
    xAxis: { categories: ['10 AM', '11 AM', '12 AM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM'],
      title: { text: null } },
    yAxis: { min: 0, title: { text: 'Price', align: 'high' }, labels: { overflow: 'justify' } },
    tooltip: { valueSuffix: ' Rupees' },
    plotOptions: { bar: { dataLabels: { enabled: true } } },
    credits: {enabled: false},
    series: [{name: 'Sales', data: [107, 31, 635, 203, 2, 133, 156, 947, 408, 6]}]
  }; // required

  chartCallback = function (chart) {
    //console.log(chart);        
  } // optional function, defaults to null
  updateFlag = false; // optional boolean
  oneToOneFlag = true; // optional boolean, defaults to false
  runOutsideAngular = false; // optional boolean, defaults to false

  constructor(private store: Store<ApplicationState>) { 
    this.chart$ = this.store.select<Dashboard>((state: any) => state['dashboard'].dashboard);
    //this.load();
    this.store.select<Dashboard>((state: any) => state['dashboard'].dashboard)
    .subscribe((chart: any) => {
      console.log("chart");
      console.log(chart);
      // this.chartOptions.title = chart.entities.title;
      // this.chartOptions.series = chart.entities.series;
      // this.chartOptions.xAxis.categories = chart.entities.categories;
    });
  }

  load() {
    const action = new LoadDashboard();
    console.log(action);
    this.store.dispatch(action);
  }

  ngOnInit() {
    this.chart$ = this.store.select<Dashboard>((state: any) => state['dashboard'].dashboard);
  }

  ngOnDestroy(){
    
  }


}
