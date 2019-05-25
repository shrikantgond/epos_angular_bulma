import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerState } from 'src/app/store/customer-store/states/customer.state';
import { LoadCustomer } from 'src/app/store/customer-store/actions/customer.actions';
import { Store } from '@ngrx/store';
import { ApplicationState } from 'src/app/store/application.state';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  customer$: Observable<CustomerState>;

  constructor(private store: Store<ApplicationState>) {     
    this.customer$ = this.store.select<CustomerState>((state: any) => state['customer']);
    this.load();
  }

  load() {
    const action = new LoadCustomer();    
      this.store.dispatch(action); 
  }

  ngOnInit() {
  }

}

export interface ICustomerListItem {

  name: string;
  email: string;
  mobile: number;

}