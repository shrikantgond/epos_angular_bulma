import {Action} from '@ngrx/store';
import { IOrderModel, IOrderItemModel } from 'src/app/models/order.model';

//#region  Order Order Action Types
export enum OrderActionsTypes {
    Load = '[Order] LOAD',
    Save = '[Order] SAVE',
    Delete = '[Order] DELETE',
    LoadSuccess = '[Order] LOAD SUCCESS',
    LoadError = '[Order] LOAD ERROR',
    SaveSuccess = '[Order] SAVE SUCCESS',
    SaveError = '[Order] SAVE ERROR',
    DeleteSuccess = '[Order] DELETE SUCCESS',
    DeleteError = '[Order] DELETE ERROR',
  }
  
  export class LoadOrder implements Action {
    readonly type = OrderActionsTypes.Load;
  }
  export class LoadOrderSuccess implements Action {
    readonly type = OrderActionsTypes.LoadSuccess;
    constructor(public payload: {orders: IOrderModel[]}) {      
    }
  }
  export class LoadOrderError implements Action {
    readonly type = OrderActionsTypes.LoadError;
    constructor(public error: any) {}
  }

  export class SaveOrder implements Action {
    readonly type = OrderActionsTypes.Save;
    constructor(public payload: {tablecode: number, menuitem: IOrderItemModel, actiontype:string}) {      
    }
  }
  export class SaveOrderSuccess implements Action {
    readonly type = OrderActionsTypes.Load;
  }
  export class SaveOrderError implements Action {
    readonly type = OrderActionsTypes.LoadError;
    constructor(public error: any) {}
  }

  export class DeleteOrder implements Action {
    readonly type = OrderActionsTypes.Delete;
    constructor(public payload: {tablecode: number}) {      
    }
  }
  export class DeleteOrderSuccess implements Action {
    readonly type = OrderActionsTypes.Load;
  }
  export class DeleteOrderError implements Action {
    readonly type = OrderActionsTypes.LoadError;
    constructor(public error: any) {}
  }

  //#endregion

  export type OrderActions = LoadOrder | SaveOrder | DeleteOrder | LoadOrderSuccess | LoadOrderError