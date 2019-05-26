import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BillState } from 'src/app/store/bill-store/states/bill.state';
import { Store } from '@ngrx/store';
import { ApplicationState } from 'src/app/store/application.state';
import { LoadBill } from 'src/app/store/bill-store/actions/bill.actions';

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
    // this.store.select<TopSellingState>((state: any) => state['topselling'])
    // .subscribe((chart: any) => { console.log('ad'); console.log(chart); }); 

  }

  load() {
    const action = new LoadBill();    
      this.store.dispatch(action); 
  }

  ngOnInit() {
  }

}
