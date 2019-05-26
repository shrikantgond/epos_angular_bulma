import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { IBillModel } from '../models/bill.model';


export function mockBillApiResponse(): Observable<IBillModel[]> {
  return of(
    [
      {
        billno: 1000 + Math.floor(1150 * Math.random()),paymentstate: 'Paid' ,custname: 'Masala Chai', ammount: Math.floor(50 * Math.random()), date: Date.now()
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
  )
    .pipe(
      delay(1000)
    )
}