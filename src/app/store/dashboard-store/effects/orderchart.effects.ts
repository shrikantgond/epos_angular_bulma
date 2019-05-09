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

}

