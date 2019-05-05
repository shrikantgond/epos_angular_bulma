import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, delay, map, switchMap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Observable, of, pipe, throwError} from 'rxjs';
import {LoadDashboardError, LoadDashboardSuccess, DashboardActionsTypes} from './dashboard-store.actions';
import { IChartModel } from 'src/app/models/order-chart.model';

function mockApiResponse(): Observable<IChartModel> {
  return of({    
    chart: { type: 'column' },
    title: { text: 'Payment Chart' },
    xAxis: { categories: ['10 AM', '11 AM', '12 AM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM'],
      title: { text: null } },
    yAxis: { min: 0, title: { text: 'Price'}, labels: { overflow: 'justify' } },
    tooltip: { valueSuffix: ' Rupees' },
    plotOptions: { bar: { dataLabels: { enabled: true } } },
    credits: {enabled: false},
    series: [{name: 'Sales', data: [1000*Math.random(), 1000*Math.random(), 1000*Math.random(), 1000*Math.random(), 2, 133, 156, 947, 408, 6]}]
})
  .pipe(
    delay(1000)
  )
  //return throwError(new Error('This is custom error'));
}

@Injectable()
export class DashboardEffects {

  constructor(private actions$: Actions, private http: HttpClient) {
    //console.log('hi')
  }

  @Effect()
  loadDashboard = this.actions$.pipe(
    ofType(DashboardActionsTypes.Load),
    switchMap(action => {
      // return this.http.get('some url');
      return mockApiResponse().pipe(
        map((response: any) => new LoadDashboardSuccess({entities: response})),
        catchError(error => of(new LoadDashboardError(error)))
      );
    }),
  );
}

