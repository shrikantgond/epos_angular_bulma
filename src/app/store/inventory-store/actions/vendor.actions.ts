import {Action} from '@ngrx/store';
import { IVendorModel } from 'src/app/models/vendor.model';

//#region  Order Vendor Action Types
export enum VendorActionsTypes {
    Load = '[Vendor] LOAD',
    LoadSuccess = '[Vendor] LOAD SUCCESS',
    LoadError = '[Vendor] LOAD ERROR',
  }
  
  export class LoadVendor implements Action {
    readonly type = VendorActionsTypes.Load;
  }
  
  export class LoadVendorSuccess implements Action {
    readonly type = VendorActionsTypes.LoadSuccess;
    constructor(public payload: {vendors: IVendorModel[]}) {      
    }
  }
  
  export class LoadVendorError implements Action {
    readonly type = VendorActionsTypes.LoadError;
    constructor(public error: any) {}
  }
  //#endregion

  export type VendorActions = LoadVendor | LoadVendorSuccess | LoadVendorError