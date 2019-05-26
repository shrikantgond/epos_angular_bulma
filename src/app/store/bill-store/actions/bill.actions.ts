import {Action} from '@ngrx/store';
import { IBillModel } from 'src/app/models/bill.model';

//#region  Order Bill Action Types
export enum BillActionsTypes {
    Load = '[Bill] LOAD',
    LoadSuccess = '[Bill] LOAD SUCCESS',
    LoadError = '[Bill] LOAD ERROR',
  }
  
  export class LoadBill implements Action {
    readonly type = BillActionsTypes.Load;
  }
  
  export class LoadBillSuccess implements Action {
    readonly type = BillActionsTypes.LoadSuccess;
    constructor(public payload: {bills: IBillModel[]}) {      
    }
  }
  
  export class LoadBillError implements Action {
    readonly type = BillActionsTypes.LoadError;
    constructor(public error: any) {}
  }
  //#endregion

  export type BillActions = LoadBill | LoadBillSuccess | LoadBillError