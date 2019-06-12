import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {of} from 'rxjs';
//import * as mocks from 'src/app/mocks/menu.mocks';
import * as actions from '../actions/menu.actions';

@Injectable()
export class MenuEffects {

  constructor(private actions$: Actions, private http: HttpClient) {
  }

  @Effect()
  loadMenus = this.actions$.pipe(
    ofType(actions.MenuActionsTypes.Load),
    switchMap(action => {
      console.log('Menu api called');
      return this.http.post('http://localhost:8180/api/menu/getmenus',{}).pipe(
        map((response: any) => new actions.LoadMenuSuccess({menus: response})),
        catchError(error => of(new actions.LoadMenuError(error)))
      );      
    }),
  );

}

