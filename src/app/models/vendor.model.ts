import { stringify } from '@angular/core/src/render3/util';
import { IInventoryModel } from './inventory.model';

export interface IVendorModel{
    title: string;
    mobile: number;
    email: string;
    credit:number;
    maxcredit:number;
    address:string;
    //inventoryitems?: IInventoryModel[];
  }

  export function DefaultVendors(): IVendorModel[] {
    return [
        {title:"Shrikant Pvt. Ltd.",mobile:9421883354,email:"shrikant@gond.com",credit:24,maxcredit:100,address:"B-603, Ramchandra Nagar Apt..."}
      ,{title:"Avinash Traders Pvt. Ltd.",mobile:9421883354,email:"shrikant@gond.com",credit:24,maxcredit:100,address:"B-603, Ramchandra Nagar Apt..."}
      ,{title:"Minutai Caterers",mobile:9421883354,email:"shrikant@gond.com",credit:24,maxcredit:100,address:"B-603, Ramchandra Nagar Apt..."}
      ,{title:"Tukamram Pande mithai",mobile:9421883354,email:"shrikant@gond.com",credit:24,maxcredit:100,address:"B-603, Ramchandra Nagar Apt..."}
      ,{title:"Mohani traders",mobile:9421883354,email:"shrikant@gond.com",credit:24,maxcredit:100,address:"B-603, Ramchandra Nagar Apt..."}
      ,{title:"Akshay mills",mobile:9421883354,email:"shrikant@gond.com",credit:24,maxcredit:100,address:"B-603, Ramchandra Nagar Apt..."}
    ]
}