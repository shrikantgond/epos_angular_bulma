import {Action} from '@ngrx/store';
import { ICustomerModel } from 'src/app/models/Customer.model';

//#region  Order Customer Action Types
export enum CustomerActionsTypes {
    Load = '[Customer] LOAD',
    LoadSuccess = '[Customer] LOAD SUCCESS',
    LoadError = '[Customer] LOAD ERROR',
  }
  
  export class LoadCustomer implements Action {
    readonly type = CustomerActionsTypes.Load;
  }
  
  export class LoadCustomerSuccess implements Action {
    readonly type = CustomerActionsTypes.LoadSuccess;
    constructor(public payload: {Customers: ICustomerModel[]}) {      
    }
  }
  
  export class LoadCustomerError implements Action {
    readonly type = CustomerActionsTypes.LoadError;
    constructor(public error: any) {}
  }
  //#endregion

  export type CustomerActions = LoadCustomer | LoadCustomerSuccess | LoadCustomerError