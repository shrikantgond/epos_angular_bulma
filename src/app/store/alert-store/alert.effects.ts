import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, delay, map, switchMap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Observable, of, pipe, throwError} from 'rxjs';
import {LoadAlertError, LoadAlertSuccess, AlertActionsTypes} from './Alert.actions';

function mockApiResponse(): Observable<{ todaysAlert: string[] }> {
  // return of({ todaysAlert: ['Alert '+Math.random() * 10, 'Alert2', 'Alert3', 'Alert4', '']    
  // })
  // .pipe(
  //   delay(1500)
  // )
  return throwError(new Error('This is custom error'));
}

@Injectable()
export class AlertEffects {

  constructor(private actions$: Actions, private http: HttpClient) {
    //console.log('hi')
  }

  @Effect()
  loadAlert = this.actions$.pipe(
    ofType(AlertActionsTypes.Load),
    switchMap(action => {
      // return this.http.get('some url');
      return mockApiResponse().pipe(
        map((response: any) => new LoadAlertSuccess({entities: response.todaysAlert})),
        catchError(error => of(new LoadAlertError(error)))
      );
    }),
  );
}
