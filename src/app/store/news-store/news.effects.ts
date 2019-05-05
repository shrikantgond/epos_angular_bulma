import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, delay, map, switchMap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Observable, of, pipe} from 'rxjs';
import {LoadNewsError, LoadNewsSuccess, NewsActionsTypes} from './news.actions';

function mockApiResponse(): Observable<{ todaysNews: string[] }> {
  return of({
    todaysNews: ['news '+Math.random() * 10, 'news2', 'news3', 'news4']
  }).pipe(
    delay(1000)
  );
}

@Injectable()
export class NewsEffects {

  constructor(private actions$: Actions, private http: HttpClient) {
    //console.log('hi')
  }

  @Effect()
  loadNews = this.actions$.pipe(
    ofType(NewsActionsTypes.Load),
    switchMap(action => {
      // return this.http.get('some url');
      return mockApiResponse().pipe(
        map((response: any) => new LoadNewsSuccess({entities: response.todaysNews})),
        catchError(error => of(new LoadNewsError(error)))
      );
    }),
  );
}
