import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, mergeMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import * as mocks from 'src/app/mocks/vendor.mocks';
import * as actions from '../actions/vendor.actions';
// import { Action } from '@ngrx/store';


@Injectable()
export class VendorEffects {

  constructor(private actions$: Actions, private http: HttpClient) {
    //console.log('hi')
  }

  @Effect()
  loadVendors = this.actions$.pipe(
    ofType(actions.VendorActionsTypes.Load),
    switchMap(action => {
      // return this.http.get('some url');      
      console.log('Vendor api called');
      return mocks.mockVendorApiResponse().pipe(
        map((response: any) => new actions.LoadVendorSuccess({vendors: response})),
        catchError(error => of(new actions.LoadVendorError(error)))
      );
    }),
  );


}


