import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {of} from 'rxjs';
import * as mocks from 'src/app/mocks/order.mocks';
import * as actions from '../actions/table.actions';


@Injectable()
export class TableEffects {

  constructor(private actions$: Actions, private http: HttpClient) {
    //console.log('hi')
  }

  @Effect()
  loadTables = this.actions$.pipe(
    ofType(actions.TableActionsTypes.Load),
    switchMap(action => {
      // return this.http.get('some url');      
      console.log('Table api called');
      return mocks.mockTableApiResponse().pipe(
        map((response: any) => new actions.LoadTableSuccess({tables: response})),
        catchError(error => of(new actions.LoadTableError(error)))
      );
    }),
  );

}

