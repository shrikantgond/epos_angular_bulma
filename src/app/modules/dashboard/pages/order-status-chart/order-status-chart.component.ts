import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ApplicationState } from 'src/app/store/application.state';
import { Observable } from 'rxjs';
import { OrderStatusChartState } from 'src/app/store/dashboard-store/states/OrderStatusChart.state';
import { Store } from '@ngrx/store';
import { LoadOrderStatusChart } from 'src/app/store/dashboard-store/actions/orderstatuschart.actions';

@Component({
  selector: 'app-order-status-chart',
  templateUrl: './order-status-chart.component.html',
  styleUrls: ['./order-status-chart.component.scss']
})
export class OrderStatusChartComponent implements OnInit {

  orderstatuschart$: Observable<OrderStatusChartState>;

  Highcharts = Highcharts; // required
  chartConstructor = 'chart'; // optional string, defaults to 'chart'
  chartCallback = function (chart) {
    //console.log(chart);
  } // optional function, defaults to null
  updateFlag = false; // optional boolean
  oneToOneFlag = true; // optional boolean, defaults to false
  runOutsideAngular = false; // optional boolean, defaults to false




  constructor(private store: Store<ApplicationState>) {     
    this.orderstatuschart$ = this.store.select<OrderStatusChartState>((state: any) => state['orderstatuschart']);
    this.load();
  }

  ngOnInit() {
  }

  load() {
    const action = new LoadOrderStatusChart();    
      this.store.dispatch(action); 
  }

}
