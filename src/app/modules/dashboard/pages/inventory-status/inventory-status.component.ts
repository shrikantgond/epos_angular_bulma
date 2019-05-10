import { Component, OnInit } from '@angular/core';
import { InventoryStatusState } from 'src/app/store/dashboard-store/states/inventorystatus.state';
import { Observable } from 'rxjs';
import { LoadInventoryStatus } from 'src/app/store/dashboard-store/actions/inventorystatus.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-inventory-status',
  templateUrl: './inventory-status.component.html',
  styleUrls: ['./inventory-status.component.scss']
})
export class InventoryStatusComponent implements OnInit {

  inventorystatus$: Observable<InventoryStatusState>;

  constructor(private store: Store<InventoryStatusState>) {     
    this.inventorystatus$ = this.store.select<InventoryStatusState>((state: any) => state['inventorystatus']);
    this.load();
    // this.store.select<TopSellingState>((state: any) => state['topselling'])
    // .subscribe((chart: any) => { console.log('ad'); console.log(chart); }); 

  }

  load() {
    const action = new LoadInventoryStatus();    
      this.store.dispatch(action); 
  }

  ngOnInit() {
  }

}
