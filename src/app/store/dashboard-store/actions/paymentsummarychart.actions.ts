import {Action} from '@ngrx/store';
import { IChartModel } from 'src/app/models/chart.model';

//#region  PaymentSummary Summary Chart Action Types
export enum PaymentSummaryChartActionsTypes {
    Load = '[PaymentSummaryChart] LOAD',
    LoadSuccess = '[PaymentSummaryChart] LOAD SUCCESS',
    LoadError = '[PaymentSummaryChart] LOAD ERROR',
  }
  
  export class LoadPaymentSummaryChart implements Action {
    readonly type = PaymentSummaryChartActionsTypes.Load;
  }
  
  export class LoadPaymentSummaryChartSuccess implements Action {
    readonly type = PaymentSummaryChartActionsTypes.LoadSuccess;
    constructor(public payload: {paymentsummarychart: IChartModel}) {}
  }
  
  export class LoadPaymentSummaryChartError implements Action {
    readonly type = PaymentSummaryChartActionsTypes.LoadError;
    constructor(public error: any) {}
  }
  //#endregion

  export type PaymentSummaryChartActions = LoadPaymentSummaryChart | LoadPaymentSummaryChartSuccess | LoadPaymentSummaryChartError