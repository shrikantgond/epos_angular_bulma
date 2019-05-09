import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {of} from 'rxjs';
import * as mocks from 'src/app/mocks/dashboard.mocks';
import * as actions from '../actions/orderstatuschart.actions';


@Injectable()
export class OrderStatusChartEffects {

  constructor(private actions$: Actions, private http: HttpClient) {    
  }

  @Effect()
  loadOrderStatusChart = this.actions$.pipe(
    ofType(actions.OrderStatusChartActionsTypes.Load),
    switchMap(action => {
      console.log('loadOrderStatusChart api called');
      // return this.http.get('some url');
      return mocks.mockOrderStatusChartApiResponse().pipe(
        map((response: any) => new actions.LoadOrderStatusChartSuccess({orderstatuschart: response})),
        catchError(error => of(new actions.LoadOrderStatusChartError(error)))
      );
    }),
  );  

}

