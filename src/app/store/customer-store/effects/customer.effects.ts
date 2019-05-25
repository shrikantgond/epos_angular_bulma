import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, mergeMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import * as mocks from 'src/app/mocks/customer.mocks';
import * as actions from '../actions/customer.actions';
// import { Action } from '@ngrx/store';


@Injectable()
export class CustomerEffects {

  constructor(private actions$: Actions, private http: HttpClient) {
    //console.log('hi')
  }

  @Effect()
  loadCustomers = this.actions$.pipe(
    ofType(actions.CustomerActionsTypes.Load),
    switchMap(action => {
      // return this.http.get('some url');      
      console.log('Customer api called');
      return mocks.mockCustomerApiResponse().pipe(
        map((response: any) => new actions.LoadCustomerSuccess({Customers: response})),
        catchError(error => of(new actions.LoadCustomerError(error)))
      );
    }),
  );


}


