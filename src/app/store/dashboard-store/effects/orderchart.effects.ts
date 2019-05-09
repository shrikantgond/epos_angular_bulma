import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {of} from 'rxjs';
import * as mocks from 'src/app/mocks/dashboard.mocks';
import * as actions from '../actions/orderchart.actions';


@Injectable()
export class OrderChartEffects {

  constructor(private actions$: Actions, private http: HttpClient) {
    //console.log('hi')
  }

  @Effect()
  loadOrderChart = this.actions$.pipe(
    ofType(actions.OrderChartActionsTypes.Load),
    switchMap(action => {
      console.log('loadOrderChart api called');
      // return this.http.get('some url');
      return mocks.mockOrderChartApiResponse().pipe(
        map((response: any) => new actions.LoadOrderChartSuccess({orderchart: response})),
        catchError(error => of(new actions.LoadOrderChartError(error)))
      );
    }),
  );

  // @Effect()
  // loadPaymentChart = this.actions$.pipe(
  //   ofType(actions.PaymentChartActionsTypes.Load),
  //   switchMap(action => {
  //     // return this.http.get('some url');
  //     return mocks.mockPaymentChartApiResponse().pipe(
  //       map((response: any) => new actions.LoadPaymentChartSuccess({paymentchart: response})),
  //       catchError(error => of(new actions.LoadPaymentChartError(error)))
  //     );
  //   }),
  // );

  // @Effect()
  // loadPaymentSummaryChart = this.actions$.pipe(
  //   ofType(actions.PaymentSummaryChartActionsTypes.Load),
  //   switchMap(action => {
  //     // return this.http.get('some url');
  //     return mocks.mockPaymentSummaryChartApiResponse().pipe(
  //       map((response: any) => new actions.LoadPaymentSummaryChartSuccess({paymentsummarychart: response})),
  //       catchError(error => of(new actions.LoadPaymentSummaryChartError(error)))
  //     );
  //   }),
  // );

}

