import {Action} from '@ngrx/store';
import { IChartModel } from 'src/app/models/chart.model';

//#region  OrderStatus Chart Action Types
export enum OrderStatusChartActionsTypes {
    Load = '[OrderStatusChart] LOAD',
    LoadSuccess = '[OrderStatusChart] LOAD SUCCESS',
    LoadError = '[OrderStatusChart] LOAD ERROR',
  }
  
  export class LoadOrderStatusChart implements Action {
    readonly type = OrderStatusChartActionsTypes.Load;
  }
  
  export class LoadOrderStatusChartSuccess implements Action {
    readonly type = OrderStatusChartActionsTypes.LoadSuccess;
    constructor(public payload: {orderstatuschart: IChartModel}) {}
  }
  
  export class LoadOrderStatusChartError implements Action {
    readonly type = OrderStatusChartActionsTypes.LoadError;
    constructor(public error: any) {}
  }
  //#endregion

  export type OrderStatusChartActions = LoadOrderStatusChart | LoadOrderStatusChartSuccess | LoadOrderStatusChartError