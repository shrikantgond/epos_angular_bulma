
export interface IBillcustomerModel {
	customercode: string;
	name: string;
}


export function DefaultBillcustomers(): IBillcustomerModel[] {
    return [
	{ customercode: "Sample1", name: "Sample1",  },
	]
}