import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {of} from 'rxjs';
//import * as mocks from 'src/app/mocks/billdetails.mocks';
import * as actions from '../actions/billdetails.actions';

@Injectable()
export class BilldetailsEffects {

  constructor(private actions$: Actions, private http: HttpClient) { }
  
  @Effect()
  Load_getbilldetails = this.actions$.pipe( ofType(actions.BilldetailsActionsTypes.Load_getbilldetails),
    switchMap(action => {
      return this.http.post('http://localhost:8180/api/bill/getbilldetails',{}).pipe(
        map((response: any) => new actions.Load_getbilldetailsSuccess({billdetailss: response})),
        catchError(error => of(new actions.Load_getbilldetailsError(error)))
      );      
    }),
  );

}
