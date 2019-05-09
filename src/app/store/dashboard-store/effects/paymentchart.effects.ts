import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {of} from 'rxjs';
import * as mocks from 'src/app/mocks/dashboard.mocks';
import * as actions from '../actions/paymentchart.actions';


@Injectable()
export class PaymentChartEffects {

  constructor(private actions$: Actions, private http: HttpClient) {
    //console.log('hi')
  }

  @Effect()
  loadPaymentChart = this.actions$.pipe(    
    ofType(actions.PaymentChartActionsTypes.Load),
    switchMap(action => {
      console.log('loadPaymentChart api called');
      // return this.http.get('some url');
      return mocks.mockPaymentChartApiResponse().pipe(
        map((response: any) => new actions.LoadPaymentChartSuccess({paymentchart: response})),
        catchError(error => of(new actions.LoadPaymentChartError(error)))
      );
    }),
  );

}

