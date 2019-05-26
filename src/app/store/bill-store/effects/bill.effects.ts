import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, mergeMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import * as mocks from 'src/app/mocks/bill.mocks';
import * as actions from '../actions/bill.actions';
// import { Action } from '@ngrx/store';


@Injectable()
export class BillEffects {

  constructor(private actions$: Actions, private http: HttpClient) {
    //console.log('hi')
  }

  @Effect()
  loadBills = this.actions$.pipe(
    ofType(actions.BillActionsTypes.Load),
    switchMap(action => {
      // return this.http.get('some url');      
      console.log('Bill api called');
      return mocks.mockBillApiResponse().pipe(
        map((response: any) => new actions.LoadBillSuccess({bills: response})),
        catchError(error => of(new actions.LoadBillError(error)))
      );
    }),
  );


}


