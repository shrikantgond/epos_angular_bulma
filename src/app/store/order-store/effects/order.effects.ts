import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, mergeMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import * as mocks from 'src/app/mocks/order.mocks';
import * as actions from '../actions/order.actions';
import { Action } from '@ngrx/store';


@Injectable()
export class OrderEffects {

  constructor(private actions$: Actions, private http: HttpClient) {
    //console.log('hi')
  }

//   @Effect()
//   loadOrders = this.actions$.pipe(
//     ofType(actions.OrderActionsTypes.Load),
//     switchMap(action => {
//       // return this.http.get('some url');      
//       console.log('Order api called');
//       return mocks.mockGetOrdersApiResponse().pipe(
//         map((response: any) => new actions.LoadOrderSuccess({ orders: response })),
//         catchError(error => of(new actions.LoadOrderError(error)))
//       );
//     }),
//   );
// 

//   @Effect()
//   addOrder = this.actions$.pipe(
//     ofType(actions.OrderActionsTypes.Save),
//     switchMap(({ payload })  => {
//       console.log('Order save api called');
//       console.log(payload);
//       const updated = mocks.mockUpdateOrderApiResponse(payload);
//       if(updated){
//         return of(new actions.LoadOrder());
//       }
//       else{
//         return catchError(error => of(new actions.LoadOrderError(error)));
//       }      
//   })
//   );


}


