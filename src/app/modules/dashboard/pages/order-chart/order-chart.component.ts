import { Component, OnInit, OnDestroy } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Observable } from 'rxjs';
import { ApplicationState } from 'src/app/store/application.state';
import { Store } from '@ngrx/store';
import { LoadOrderChart, LoadPaymentChart } from 'src/app/store/dashboard-store/dashboard-store.actions';
import { Dashboard } from 'src/app/store/dashboard-store/dashboard-store';

@Component({
  selector: 'app-order-chart',
  templateUrl: './order-chart.component.html',
  styleUrls: ['./order-chart.component.scss']
})
export class OrderChartComponent implements OnInit,OnDestroy {

  dashboard$: Observable<Dashboard>;
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
    this.dashboard$ = this.store.select<Dashboard>((state: any) => state['dashboard'].dashboard);
    this.load();
    this.store.select<Dashboard>((state: any) => state['dashboard'].dashboard)
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
    //console.log('checked :'+ this.isorderchart);
  }

  ngOnInit() {
    //this.dashboard$ = this.store.select<Dashboard>((state: any) => state['dashboard'].dashboard);
  }

  ngOnDestroy(){    
  }


}
