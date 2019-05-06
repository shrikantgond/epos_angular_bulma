import {Action} from '@ngrx/store';
import { IOrderChartModel } from 'src/app/models/order-chart.model';


//#region  Order Chart Action Types
export enum OrderChartActionsTypes {
  Load = '[OrderChart] LOAD',
  LoadSuccess = '[OrderChart] LOAD SUCCESS',
  LoadError = '[OrderChart] LOAD ERROR',
}

export class LoadOrderChart implements Action {
  readonly type = OrderChartActionsTypes.Load;
}

export class LoadOrderChartSuccess implements Action {
  readonly type = OrderChartActionsTypes.LoadSuccess;
  constructor(public payload: {orderchart: IOrderChartModel}) {}
}

export class LoadOrderChartError implements Action {
  readonly type = OrderChartActionsTypes.LoadError;
  constructor(public error: any) {}
}
//#endregion


//#region  Payment Chart Action Types
export enum PaymentChartActionsTypes {
  Load = '[PaymentChart] LOAD',
  LoadSuccess = '[PaymentChart] LOAD SUCCESS',
  LoadError = '[PaymentChart] LOAD ERROR',
}

export class LoadPaymentChart implements Action {
  readonly type = PaymentChartActionsTypes.Load;
}

export class LoadPaymentChartSuccess implements Action {
  readonly type = PaymentChartActionsTypes.LoadSuccess;
  constructor(public payload: {paymentchart: IOrderChartModel}) {}
}

export class LoadPaymentChartError implements Action {
  readonly type = PaymentChartActionsTypes.LoadError;
  constructor(public error: any) {}
}
//#endregion


export type DashboardActionsUnion = LoadOrderChart | LoadOrderChartSuccess | LoadOrderChartError
| LoadPaymentChart | LoadPaymentChartSuccess | LoadPaymentChartError;
