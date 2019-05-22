import {Action} from '@ngrx/store';
import { ITableModel } from 'src/app/models/table.model';

//#region  Order Table Action Types
export enum TableActionsTypes {
    Load = '[Table] LOAD',
    LoadSuccess = '[Table] LOAD SUCCESS',
    LoadError = '[Table] LOAD ERROR',
  }
  
  export class LoadTable implements Action {
    readonly type = TableActionsTypes.Load;
  }
  
  export class LoadTableSuccess implements Action {
    readonly type = TableActionsTypes.LoadSuccess;
    constructor(public payload: {tables: ITableModel[]}) {      
    }
  }
  
  export class LoadTableError implements Action {
    readonly type = TableActionsTypes.LoadError;
    constructor(public error: any) {}
  }
  //#endregion

  export type TableActions = LoadTable | LoadTableSuccess | LoadTableError