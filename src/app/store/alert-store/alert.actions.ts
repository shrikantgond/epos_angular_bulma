import {Action} from '@ngrx/store';

export enum AlertActionsTypes {
  Load = '[Alert] LOAD',
  LoadSuccess = '[Alert] LOAD SUCCESS',
  LoadError = '[Alert] LOAD ERROR',
}

export class LoadAlert implements Action {
  readonly type = AlertActionsTypes.Load;
}

export class LoadAlertSuccess implements Action {
  readonly type = AlertActionsTypes.LoadSuccess;
  constructor(public payload: {entities: string[]}) {}
}

export class LoadAlertError implements Action {
  readonly type = AlertActionsTypes.LoadError;
  constructor(public error: any) {}
}

export type NewActionsUnion = LoadAlert | LoadAlertSuccess | LoadAlertError;
