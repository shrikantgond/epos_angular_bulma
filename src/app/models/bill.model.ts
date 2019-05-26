export interface IBillModel {
    billno: number;
    paymentstate:string;
    custname: string;
    ammount?: number;
    date: number;
}


export function DefaultBills(): IBillModel[] {
    return [{
        billno: 1000 + Math.floor(1150 * Math.random()),paymentstate: 'Paid', custname: 'Masala Chai', ammount: Math.floor(50 * Math.random()), date: Date.now()
    }, {
        billno: 1000 + Math.floor(1150 * Math.random()),paymentstate: 'Paid', custname: 'Masala Chai', ammount: Math.floor(50 * Math.random()), date: Date.now()
    },
    {
        billno: 1000 + Math.floor(1150 * Math.random()),paymentstate: 'Paid', custname: 'Masala Chai', ammount: Math.floor(50 * Math.random()), date: Date.now()
    },
    {
        billno: 1000 + Math.floor(1150 * Math.random()),paymentstate: 'Paid', custname: 'Masala Chai', ammount: Math.floor(50 * Math.random()), date: Date.now()
    },
    {
        billno: 1000 + Math.floor(1150 * Math.random()),paymentstate: 'Paid', custname: 'Masala Chai', ammount: Math.floor(50 * Math.random()), date: Date.now()
    },
    {
        billno: 1000 + Math.floor(1150 * Math.random()),paymentstate: 'Paid', custname: 'Masala Chai', ammount: Math.floor(50 * Math.random()), date: Date.now()
    },
    {
        billno: 1000 + Math.floor(1150 * Math.random()),paymentstate: 'Paid', custname: 'Masala Chai', ammount: Math.floor(50 * Math.random()), date: Date.now()
    },

    ]
}