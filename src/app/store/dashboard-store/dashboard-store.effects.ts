import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {of} from 'rxjs';
import {LoadOrderChartError, LoadOrderChartSuccess, OrderChartActionsTypes, LoadPaymentChartSuccess, LoadPaymentChartError, PaymentChartActionsTypes} from './dashboard-store.actions';
import { mockOrderChartApiResponse, mockPaymentChartApiResponse } from 'src/app/mocks/dashboard.mocks';


@Injectable()
export class DashboardEffects {

  constructor(private actions$: Actions, private http: HttpClient) {
    //console.log('hi')
  }

  @Effect()
  loadOrderChart = this.actions$.pipe(
    ofType(OrderChartActionsTypes.Load),
    switchMap(action => {
      // return this.http.get('some url');
      return mockOrderChartApiResponse().pipe(
        map((response: any) => new LoadOrderChartSuccess({orderchart: response})),
        catchError(error => of(new LoadOrderChartError(error)))
      );
    }),
  );

  @Effect()
  loadPaymentChart = this.actions$.pipe(
    ofType(PaymentChartActionsTypes.Load),
    switchMap(action => {
      // return this.http.get('some url');
      return mockPaymentChartApiResponse().pipe(
        map((response: any) => new LoadPaymentChartSuccess({paymentchart: response})),
        catchError(error => of(new LoadPaymentChartError(error)))
      );
    }),
  );
}

