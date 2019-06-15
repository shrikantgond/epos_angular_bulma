import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { IBillModel } from '../models/bill.model';


export function mockBillApiResponse(): Observable<IBillModel[]> {
  return of(
    [
      { billnumber: 12, paymentstatus: "Sample1", billdate: 1559825263791, payableamount: 12, customername: "Sample1",  },
      ]
  )
    .pipe(
      delay(1000)
    )
}