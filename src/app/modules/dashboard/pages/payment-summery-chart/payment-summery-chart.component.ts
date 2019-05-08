import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Observable } from 'rxjs';
import { DashboardState } from 'src/app/store/dashboard-store/dashboard-store';
import { ApplicationState } from 'src/app/store/application.state';
import { Store } from '@ngrx/store';
import { LoadPaymentSummaryChart } from 'src/app/store/dashboard-store/dashboard-store.actions';
import { OrderChartState } from 'src/app/store/dashboard-store/states/orderchart.state';
import { PaymentSummaryChartState } from 'src/app/store/dashboard-store/states/paymentsummarychart.state';

@Component({
  selector: 'app-payment-summery-chart',
  templateUrl: './payment-summery-chart.component.html',
  styleUrls: ['./payment-summery-chart.component.scss']
})
export class PaymentSummeryChartComponent implements OnInit {

  paymentsummarychart$: Observable<PaymentSummaryChartState>;

  Highcharts = Highcharts; // required
  chartConstructor = 'chart'; // optional string, defaults to 'chart'
  chartCallback = function (chart) {
    //console.log(chart);
  } // optional function, defaults to null
  updateFlag = false; // optional boolean
  oneToOneFlag = true; // optional boolean, defaults to false
  runOutsideAngular = false; // optional boolean, defaults to false


  constructor(private store: Store<ApplicationState>) {     
    this.paymentsummarychart$ = this.store.select<PaymentSummaryChartState>((state: any) => state['paymentsummarychart']);
    this.load();
    this.store.select<PaymentSummaryChartState>((state: any) => state['paymentsummarychart'])
    .subscribe((chart: any) => { console.log(chart); });
    
  }

  load() {
    const action = new LoadPaymentSummaryChart();    
      this.store.dispatch(action); console.log(action);
    //   Highcharts.charts.forEach(function(chart) {
    //     chart.reflow();
    // });
  }

  ngOnInit() {
  }

}
