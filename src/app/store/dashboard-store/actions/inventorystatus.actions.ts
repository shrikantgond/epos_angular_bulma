import {Action} from '@ngrx/store';
import { IInventoryStatusModel } from 'src/app/models/inventorystatus.model';

//#region  Order InventoryStatus Action Types
export enum InventoryStatusActionsTypes {
    Load = '[InventoryStatus] LOAD',
    LoadSuccess = '[InventoryStatus] LOAD SUCCESS',
    LoadError = '[InventoryStatus] LOAD ERROR',
  }
  
  export class LoadInventoryStatus implements Action {
    readonly type = InventoryStatusActionsTypes.Load;
  }
  
  export class LoadInventoryStatusSuccess implements Action {
    readonly type = InventoryStatusActionsTypes.LoadSuccess;
    constructor(public payload: {inventorystatus: IInventoryStatusModel[]}) {      
    }
  }
  
  export class LoadInventoryStatusError implements Action {
    readonly type = InventoryStatusActionsTypes.LoadError;
    constructor(public error: any) {}
  }
  //#endregion

  export type InventoryStatusActions = LoadInventoryStatus | LoadInventoryStatusSuccess | LoadInventoryStatusError