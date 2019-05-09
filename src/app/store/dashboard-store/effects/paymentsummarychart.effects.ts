import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import * as mocks from 'src/app/mocks/dashboard.mocks';
import * as actions from '../actions/paymentsummarychart.actions';


@Injectable()
export class PaymentSummaryChartEffects {

  constructor(private actions$: Actions, private http: HttpClient) {
    //console.log('hi')
  }

  @Effect()
  loadPaymentSummaryChart = this.actions$.pipe(
    ofType(actions.PaymentSummaryChartActionsTypes.Load),
    switchMap(action => {
      console.log('loadPaymentSummaryChart api called');
      return mocks.mockPaymentSummaryChartApiResponse().pipe(
        map((response: any) => new actions.LoadPaymentSummaryChartSuccess({ paymentsummarychart: response })),
        catchError(error => of(new actions.LoadPaymentSummaryChartError(error)))
      );
    }),
  );

}

