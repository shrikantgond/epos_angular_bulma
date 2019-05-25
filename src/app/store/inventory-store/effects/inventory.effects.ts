import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {of} from 'rxjs';
import * as mocks from 'src/app/mocks/inventory.mocks';
import * as actions from '../actions/inventory.actions';

@Injectable()
export class InventoryEffects {

  constructor(private actions$: Actions, private http: HttpClient) {
    //console.log('hi')
  }

  @Effect()
  loadInventorys = this.actions$.pipe(
    ofType(actions.InventoryActionsTypes.Load),
    switchMap(action => {
      // return this.http.get('some url');      
      console.log('Inventory api called');
      return mocks.mockInventoryApiResponse().pipe(
        map((response: any) => new actions.LoadInventorySuccess({inventorys: response})),
        catchError(error => of(new actions.LoadInventoryError(error)))
      );
    }),
  );

}

