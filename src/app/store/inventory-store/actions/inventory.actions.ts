import {Action} from '@ngrx/store';
import { IInventoryModel } from 'src/app/models/inventory.model';

//#region  Inventory Inventory Action Types
export enum InventoryActionsTypes {
    Load = '[Inventory] LOAD',
    Save = '[Inventory] SAVE',
    Delete = '[Inventory] DELETE',
    LoadSuccess = '[Inventory] LOAD SUCCESS',
    LoadError = '[Inventory] LOAD ERROR',
    SaveSuccess = '[Inventory] SAVE SUCCESS',
    SaveError = '[Inventory] SAVE ERROR',
    DeleteSuccess = '[Inventory] DELETE SUCCESS',
    DeleteError = '[Inventory] DELETE ERROR',
  }
  
  export class LoadInventory implements Action {
    readonly type = InventoryActionsTypes.Load;
  }
  export class LoadInventorySuccess implements Action {
    readonly type = InventoryActionsTypes.LoadSuccess;
    constructor(public payload: {inventorys: IInventoryModel[]}) {      
    }
  }
  export class LoadInventoryError implements Action {
    readonly type = InventoryActionsTypes.LoadError;
    constructor(public error: any) {}
  }

  export class SaveInventory implements Action {
    readonly type = InventoryActionsTypes.Save;
    constructor(public payload: {inventory: IInventoryModel, actiontype:string}) {      
    }
  }
  export class SaveInventorySuccess implements Action {
    readonly type = InventoryActionsTypes.Load;
  }
  export class SaveInventoryError implements Action {
    readonly type = InventoryActionsTypes.LoadError;
    constructor(public error: any) {}
  }

  export class DeleteInventory implements Action {
    readonly type = InventoryActionsTypes.Delete;
    constructor(public payload: {tablecode: number}) {      
    }
  }
  export class DeleteInventorySuccess implements Action {
    readonly type = InventoryActionsTypes.Load;
  }
  export class DeleteInventoryError implements Action {
    readonly type = InventoryActionsTypes.LoadError;
    constructor(public error: any) {}
  }

  //#endregion

  export type InventoryActions = LoadInventory | SaveInventory | DeleteInventory | LoadInventorySuccess | LoadInventoryError