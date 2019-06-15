export interface IBillcouponModel {
	couponcode: string;
	rate: number;
	title: string;
	ispercent: boolean;
}


export function DefaultBillcoupons(): IBillcouponModel[] {
    return [
	{ couponcode: "Sample1", rate: 12, title: "Sample1", ispercent: true,  },
	]
}