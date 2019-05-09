import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {of} from 'rxjs';
import * as mocks from 'src/app/mocks/dashboard.mocks';
import * as actions from '../actions/tile.actions';


@Injectable()
export class TileEffects {

  constructor(private actions$: Actions, private http: HttpClient) {
    //console.log('hi')
  }

  @Effect()
  loadTiles = this.actions$.pipe(
    ofType(actions.TileActionsTypes.Load),
    switchMap(action => {
      // return this.http.get('some url');      
      console.log('tile api called');
      return mocks.mockTileApiResponse().pipe(
        map((response: any) => new actions.LoadTileSuccess({tiles: response})),
        catchError(error => of(new actions.LoadTileError(error)))
      );
    }),
  );

}

