import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {of} from 'rxjs';
import * as mocks from 'src/app/mocks/dashboard.mocks';
import * as actions from '../actions/inventorystatus.actions';


@Injectable()
export class InventoryStatusEffects {

  constructor(private actions$: Actions, private http: HttpClient) {
    //console.log('hi')
  }

  @Effect()
  loadInventoryStatuss = this.actions$.pipe(
    ofType(actions.InventoryStatusActionsTypes.Load),
    switchMap(action => {
      // return this.http.get('some url');      
      console.log('InventoryStatus api called');
      return mocks.mockInventoryStatusApiResponse().pipe(
        map((response: any) => new actions.LoadInventoryStatusSuccess({inventorystatus: response})),
        catchError(error => of(new actions.LoadInventoryStatusError(error)))
      );
    }),
  );

}

