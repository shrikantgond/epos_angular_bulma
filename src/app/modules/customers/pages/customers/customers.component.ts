import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  customer_list: ICustomerListItem[];

  constructor() { }

  ngOnInit() {
    this.customer_list = [
      {name: "Aarti Gond", email:"myaarti@gmail.com", mobile:9067170865},
      {name: "Shrikant Gond", email:"shrikantgond@gmail.com", mobile:9421883354},
      {name: "Kishore Tambat", email:"kishoretambat@santabanta.com", mobile:9067170895},
      {name: "Akshay Kumar", email:"myaarti@gmail.com", mobile:9067170865},
      {name: "Ranavir Kapoor", email:"ranvir_besharam@gmail.com", mobile:9666666333},
    ]
  }

}

export interface ICustomerListItem {

  name: string;
  email: string;
  mobile: number;

}
