import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.scss']
})
export class VendorListComponent implements OnInit {

  popup_vendor_list:false;
  vendor_list: IVendorListItem[];
  popup_add_vendor=false;

  constructor() { }

  ngOnInit() {
    this.vendor_list = [
      {title:"Shrikant Pvt. Ltd.",mobile:9421883354,email:"shrikant@gond.com",credit:24,address:"B-603, Ramchandra Nagar Apt..."}
      ,{title:"Avinash Traders Pvt. Ltd.",mobile:9421883354,email:"shrikant@gond.com",credit:24,address:"B-603, Ramchandra Nagar Apt..."}
      ,{title:"Minutai Caterers",mobile:9421883354,email:"shrikant@gond.com",credit:24,address:"B-603, Ramchandra Nagar Apt..."}
      ,{title:"Tukamram Pande mithai",mobile:9421883354,email:"shrikant@gond.com",credit:24,address:"B-603, Ramchandra Nagar Apt..."}
      ,{title:"Mohani traders",mobile:9421883354,email:"shrikant@gond.com",credit:24,address:"B-603, Ramchandra Nagar Apt..."}
      ,{title:"Akshay mills",mobile:9421883354,email:"shrikant@gond.com",credit:24,address:"B-603, Ramchandra Nagar Apt..."}
    ];
  }


}


export interface IVendorListItem {
  title: string;
  mobile: number;
  email: string;
  credit:number;
  address:string;
}