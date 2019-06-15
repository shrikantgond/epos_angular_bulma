import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BillState } from 'src/app/store/bill/states/bill.state';
import { Store } from '@ngrx/store';
import { ApplicationState } from 'src/app/store/application.state';
import { Load_getbills_number_customer } from 'src/app/store/bill/actions/bill.actions';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.scss']
})
export class BillsComponent implements OnInit {

  bill$: Observable<BillState>;

  constructor(private store: Store<ApplicationState>) {     
    this.bill$ = this.store.select<BillState>((state: any) => state['bill']);
    this.load();
    this.store.select<BillState>((state: any) => state['bill'])
    .subscribe((chart: any) => { console.log('bill'); console.log(chart); }); 

  }
  
  load() {
    const action = new Load_getbills_number_customer({billnumber:12,customer:12,pagging:{skip:0,take:4,sortby:'payableamount',sortdirection:1}});    
      this.store.dispatch(action); 
  }

  ngOnInit() {
  }

}
