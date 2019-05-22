import { Observable, of, pipe } from 'rxjs';
import { catchError, delay, map, switchMap, mergeMap } from 'rxjs/operators';
import { ITableModel, DefaultTables } from '../models/table.model';
import { IMenuModel,DefaultMenus } from '../models/menu.model';
import { IOrderModel, GetOrders, AddOrder, DeleteOrder, UpdateOrder } from '../models/order.model';


export function mockTableApiResponse(): Observable<ITableModel[]> {
  return of([
    ...DefaultTables()
  ])
    .pipe(
      delay(1000)
    )  
}

export function mockMenuApiResponse(): Observable<IMenuModel[]> {
  return of([
    ...DefaultMenus()
  ])
  .pipe(
    delay(1000)
  )  
}


export function mockGetOrdersApiResponse(): Observable<IOrderModel[]> {
  return of([
    ...GetOrders()
  ])
  .pipe(
    delay(1000)
  )  
}

// export function mockAddOrderApiResponse(order: IOrderModel): void {
//   return AddOrder(order);
// }

export function mockUpdateOrderApiResponse(order: IOrderModel): boolean {
  return UpdateOrder(order);
}

export function mockDeleteOrderApiResponse(tablecode: number): void {
  return DeleteOrder(tablecode);  
}