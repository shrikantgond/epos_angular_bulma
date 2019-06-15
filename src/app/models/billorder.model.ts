export interface IBillorderModel {
	menucode: string;
	menutitle: string;
	rate: number;
	quantity: number;
	kot: number;
}


export function DefaultBillorders(): IBillorderModel[] {
    return [
	{ menucode: "Sample1", menutitle: "Sample1", rate: 12, quantity: 12, kot: 12,  },
	]
}