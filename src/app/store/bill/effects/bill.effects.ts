import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {of} from 'rxjs';
//import * as mocks from 'src/app/mocks/bill.mocks';
import * as actions from '../actions/bill.actions';

@Injectable()
export class BillEffects {

  constructor(private actions$: Actions, private http: HttpClient) { }
  
  @Effect()
  Load_getbills_number_customer = this.actions$.pipe( ofType(actions.BillActionsTypes.Load_getbills_number_customer),
    switchMap(({ payload }) => {
      return this.http.post('http://localhost:8180/api/bill/getbills_number_customer',payload).pipe(
        map((response: any) => new actions.Load_getbills_number_customerSuccess({bills: response})),
        catchError(error => of(new actions.Load_getbills_number_customerError(error)))
      );      
    }),
  );

  @Effect()
  Load_getbills_date = this.actions$.pipe( ofType(actions.BillActionsTypes.Load_getbills_date),
    switchMap(({ payload }) => {
      return this.http.post('http://localhost:8180/api/bill/getbills_date',payload).pipe(
        map((response: any) => new actions.Load_getbills_dateSuccess({bills: response})),
        catchError(error => of(new actions.Load_getbills_dateError(error)))
      );      
    }),
  );

}
