import {Action} from '@ngrx/store';
import { IBillModel } from 'src/app/models/bill.model';
import { IPaggingModel } from 'src/app/models/pagging.model';

//#region  Order Bill Action Types
export enum BillActionsTypes {
	Load_getbills_number_customer = '[getbills_number_customer] LOAD',
	Load_getbills_number_customerSuccess = '[getbills_number_customer] LOAD SUCCESS',
	Load_getbills_number_customerError = '[getbills_number_customer] LOAD ERROR',
	Load_getbills_date = '[getbills_date] LOAD',
	Load_getbills_dateSuccess = '[getbills_date] LOAD SUCCESS',
	Load_getbills_dateError = '[getbills_date] LOAD ERROR',

  }
  

export class Load_getbills_number_customer implements Action {
	readonly type = BillActionsTypes.Load_getbills_number_customer;
	constructor(public payload: {billnumber,customer,pagging:IPaggingModel}) { }	
}

export class Load_getbills_number_customerSuccess implements Action {
	readonly type = BillActionsTypes.Load_getbills_number_customerSuccess;
	constructor(public payload: {bills: IBillModel[] }) { }	
}

export class Load_getbills_number_customerError implements Action {
	readonly type = BillActionsTypes.Load_getbills_number_customerError;
	constructor(public error: any) {}
}

export class Load_getbills_date implements Action {
	readonly type = BillActionsTypes.Load_getbills_date;
	constructor(public payload: {startdate,enddate,pagging:IPaggingModel}) { }	
}

export class Load_getbills_dateSuccess implements Action {
	readonly type = BillActionsTypes.Load_getbills_dateSuccess;
	constructor(public payload: {bills: IBillModel[] }) { }	
}

export class Load_getbills_dateError implements Action {
	readonly type = BillActionsTypes.Load_getbills_dateError;
	constructor(public error: any) {}
}


  //#endregion
  export type BillActions = Load_getbills_number_customer | Load_getbills_number_customerSuccess | Load_getbills_number_customerError | Load_getbills_date | Load_getbills_dateSuccess | Load_getbills_dateError  