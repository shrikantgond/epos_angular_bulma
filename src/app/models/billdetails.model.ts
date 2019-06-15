import { IBillorderModel } from './billorder.model';
import { IBillcouponModel } from './billcoupon.model';
import { IBilltaxModel } from './billtax.model';

export interface IBilldetailsModel {
	location: number;
	billnumber: number;
	orders: IBillorderModel[];
	coupons? : IBillcouponModel[];
	taxes? : IBilltaxModel[];
	billamount: number;
	payableamount: number;
}


export function DefaultBilldetailss(): IBilldetailsModel[] {
    return [
	{ location: 12, billnumber: 12, orders: [], coupons: [], taxes: [], billamount: 12, payableamount: 12,  },
	]
}