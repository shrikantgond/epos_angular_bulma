import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {of} from 'rxjs';
import * as mocks from 'src/app/mocks/dashboard.mocks';
import * as actions from '../actions/topselling.actions';


@Injectable()
export class TopSellingEffects {

  constructor(private actions$: Actions, private http: HttpClient) {
    //console.log('hi')
  }

  @Effect()
  loadTopSellings = this.actions$.pipe(
    ofType(actions.TopSellingActionsTypes.Load),
    switchMap(action => {
      // return this.http.get('some url');      
      console.log('TopSelling api called');
      return mocks.mockTopSellingApiResponse().pipe(
        map((response: any) => new actions.LoadTopSellingSuccess({topselling: response})),
        catchError(error => of(new actions.LoadTopSellingError(error)))
      );
    }),
  );

}

