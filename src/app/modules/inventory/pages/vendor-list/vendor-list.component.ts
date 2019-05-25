import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { VendorState } from 'src/app/store/inventory-store/states/vendor.state';
import { Store } from '@ngrx/store';
import { ApplicationState } from 'src/app/store/application.state';
import { LoadVendor } from 'src/app/store/inventory-store/actions/vendor.actions';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.scss']
})
export class VendorListComponent implements OnInit {

  popup_vendor_list:false;
  vendor_list: IVendorListItem[];
  popup_add_vendor=false;

  vendor$: Observable<VendorState>;

  constructor(private store: Store<ApplicationState>) {     
    this.vendor$ = this.store.select<VendorState>((state: any) => state['vendor']);
    this.load();
  }

  load() {
    const action = new LoadVendor();    
      this.store.dispatch(action); 
  }

  ngOnInit() {
  }


}


export interface IVendorListItem {
  title: string;
  mobile: number;
  email: string;
  credit:number;
  address:string;
}