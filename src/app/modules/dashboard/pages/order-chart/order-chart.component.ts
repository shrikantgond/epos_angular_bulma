import { Component, OnInit, OnDestroy } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Observable } from 'rxjs';
import { ApplicationState } from 'src/app/store/application.state';
import { Store } from '@ngrx/store';
import { LoadOrderChart, LoadPaymentChart } from 'src/app/store/dashboard-store/dashboard-store.actions';
import { OrderChartState } from 'src/app/store/dashboard-store/states/orderchart.state';
import { DashboardState } from 'src/app/store/dashboard-store/dashboard-store';
import { PaymentChartState } from 'src/app/store/dashboard-store/states/paymentchart.state';


@Component({
  selector: 'app-order-chart',
  templateUrl: './order-chart.component.html',
  styleUrls: ['./order-chart.component.scss']
})
export class OrderChartComponent implements OnInit,OnDestroy {

  orderchart$: Observable<OrderChartState>;
  paymentchart$: Observable<PaymentChartState>;
  isorderchart: boolean = true; 

  Highcharts = Highcharts; // required
  chartConstructor = 'chart'; // optional string, defaults to 'chart'
  chartCallback = function (chart) {
    //console.log(chart);        
  } // optional function, defaults to null
  updateFlag = false; // optional boolean
  oneToOneFlag = true; // optional boolean, defaults to false
  runOutsideAngular = false; // optional boolean, defaults to false

  constructor(private store: Store<ApplicationState>) { 
    this.orderchart$ = this.store.select<OrderChartState>((state: any) => state['orderchart']);
    this.paymentchart$ = this.store.select<PaymentChartState>((state: any) => state['paymentchart']);
    this.load();
    this.store.select<PaymentChartState>((state: any) => state['paymentchart'])
    .subscribe((chart: any) => { console.log(chart); });
    this.store.select<OrderChartState>((state: any) => state['orderchart'])
    .subscribe((chart: any) => { console.log(chart); });
  }

  load() {
    if (this.isorderchart) {
      const action = new LoadOrderChart();    
      this.store.dispatch(action); console.log(action);      
    } else {
      const action = new LoadPaymentChart();    
      this.store.dispatch(action); console.log(action);
    }

  }

  checkOrderPayment(){
    this.isorderchart = !this.isorderchart;
    this.load();
  }

  ngOnInit() {
    //this.dashboard$ = this.store.select<Dashboard>((state: any) => state['dashboard'].dashboard);    
  }

  ngOnDestroy(){    
  }


}
