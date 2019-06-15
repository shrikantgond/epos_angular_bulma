import { IBillcustomerModel } from './billcustomer.model';

export interface IBillModel {
	billnumber: number;
	paymentstatus: string;
	billdate: number;
	payableamount: number;
	customerdetails? : IBillcustomerModel;
}


export function DefaultBills(): IBillModel[] {
    return [
	{ billnumber: 12, paymentstatus: "Sample1", billdate: 1559825263791, payableamount: 12, customerdetails: {customercode:"",name:""},  },
	]
}