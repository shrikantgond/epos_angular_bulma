export interface IBilltaxModel {
	taxcode: string;
	title: string;
	rate: number;
}


export function DefaultBilltaxs(): IBilltaxModel[] {
    return [
	{ taxcode: "Sample1", title: "Sample1", rate: 12,  },
	]
}