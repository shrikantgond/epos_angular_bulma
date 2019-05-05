import {Action} from '@ngrx/store';
import { IChartModel } from 'src/app/models/order-chart.model';

export enum DashboardActionsTypes {
  Load = '[Dashboard] LOAD',
  LoadSuccess = '[Dashboard] LOAD SUCCESS',
  LoadError = '[Dashboard] LOAD ERROR',
}

export class LoadDashboard implements Action {
  readonly type = DashboardActionsTypes.Load;
}

export class LoadDashboardSuccess implements Action {
  readonly type = DashboardActionsTypes.LoadSuccess;
  constructor(public payload: {entities: IChartModel}) {}
}

export class LoadDashboardError implements Action {
  readonly type = DashboardActionsTypes.LoadError;
  constructor(public error: any) {}
}

export type DashboardActionsUnion = LoadDashboard | LoadDashboardSuccess | LoadDashboardError;
