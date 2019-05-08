import {Action} from '@ngrx/store';
import { IChartModel } from 'src/app/models/chart.model';

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
    constructor(public payload: {paymentchart: IChartModel}) {}
  }
  
  export class LoadPaymentChartError implements Action {
    readonly type = PaymentChartActionsTypes.LoadError;
    constructor(public error: any) {}
  }
  //#endregion

  export type PaymentChartActions = LoadPaymentChart | LoadPaymentChartSuccess | LoadPaymentChartError