import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { IVendorModel } from '../models/vendor.model';


export function mockVendorApiResponse(): Observable<IVendorModel[]> {
  return of(
    [
        {title:"Shrikant Pvt. Ltd.",mobile:9421883354,email:"shrikant@gond.com",credit:Math.floor(80 * Math.random()),address:"B-603, Ramchandra Nagar Apt..."}
      ,{title:"Avinash Traders Pvt. Ltd.",mobile:9421883354,email:"shrikant@gond.com",credit:Math.floor(80 * Math.random()),address:"B-603, Ramchandra Nagar Apt..."}
      ,{title:"Minutai Caterers",mobile:9421883354,email:"shrikant@gond.com",credit:Math.floor(80 * Math.random()),address:"B-603, Ramchandra Nagar Apt..."}
      ,{title:"Tukamram Pande mithai",mobile:9421883354,email:"shrikant@gond.com",credit:Math.floor(80 * Math.random()),address:"B-603, Ramchandra Nagar Apt..."}
      ,{title:"Mohani traders",mobile:9421883354,email:"shrikant@gond.com",credit:Math.floor(80 * Math.random()),address:"B-603, Ramchandra Nagar Apt..."}
      ,{title:"Akshay mills",mobile:9421883354,email:"shrikant@gond.com",credit:24,address:"B-603, Ramchandra Nagar Apt..."}
    ]
  )
    .pipe(
      delay(1000)
    )
}