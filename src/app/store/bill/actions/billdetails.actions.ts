import {Action} from '@ngrx/store';
import { IBilldetailsModel } from 'src/app/models/billdetails.model';
import { IPaggingModel } from 'src/app/models/pagging.model';

//#region  Order Billdetails Action Types
export enum BilldetailsActionsTypes {
	Load_getbilldetails = '[getbilldetails] LOAD',
	Load_getbilldetailsSuccess = '[getbilldetails] LOAD SUCCESS',
	Load_getbilldetailsError = '[getbilldetails] LOAD ERROR',

  }
  

export class Load_getbilldetails implements Action {
	readonly type = BilldetailsActionsTypes.Load_getbilldetails;
	constructor(public payload: {billnumber,pagging:IPaggingModel}) { }	
}

export class Load_getbilldetailsSuccess implements Action {
	readonly type = BilldetailsActionsTypes.Load_getbilldetailsSuccess;
	constructor(public payload: {billdetailss: IBilldetailsModel[] }) { }	
}

export class Load_getbilldetailsError implements Action {
	readonly type = BilldetailsActionsTypes.Load_getbilldetailsError;
	constructor(public error: any) {}
}


  //#endregion
  export type BilldetailsActions = Load_getbilldetails | Load_getbilldetailsSuccess | Load_getbilldetailsError  