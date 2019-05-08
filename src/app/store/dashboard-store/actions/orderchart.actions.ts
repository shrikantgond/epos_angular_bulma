import {Action} from '@ngrx/store';
import { IChartModel } from 'src/app/models/chart.model';

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
    constructor(public payload: {orderchart: IChartModel}) {}
  }
  
  export class LoadOrderChartError implements Action {
    readonly type = OrderChartActionsTypes.LoadError;
    constructor(public error: any) {}
  }
  //#endregion

  export type OrderChartActions = LoadOrderChart | LoadOrderChartSuccess | LoadOrderChartError