import { Component, OnInit } from '@angular/core';
import { TableState } from 'src/app/store/order-store/states/table.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoadTable } from 'src/app/store/order-store/actions/table.actions';
import { map, filter } from 'rxjs/operators';
import { ITableModel } from 'src/app/models/table.model';

@Component({
  selector: 'app-app-orders',
  templateUrl: './app-orders.component.html',
  styleUrls: ['./app-orders.component.scss']
})
export class AppOrdersComponent implements OnInit {

  tables$: Observable<TableState>;
  tbls$: Observable<ITableModel[]>
  // filters: {
  //   all:0, available:1, occupied:2, reserved: 3, broken: 4
  // }

  //TODO: Code Cleanup and filters, table data from model
  //Note: this is sample note

  tabindex: number = 0;

  constructor(private store: Store<TableState>) {
    this.tables$ = this.store.select<TableState>((state: any) => state['table']);
    this.load();

    this.tbls$ = this.tables$.pipe(
      map(t => t.tables.filter(tbl => tbl.status === this.tabindex || this.tabindex === 0))
    );

    this.store.select<TableState>((state: any) => state['table']).subscribe((chart: any) => { console.log(chart); });

    //this.tabindex = 2;//this.filters.all;
  }

  load() {
    const action = new LoadTable();
    this.store.dispatch(action);
  }

  onTabChange(tabIndex) {
    switch (tabIndex) {
      case 0:
      case 1:
      case 2:
        this.tabindex = tabIndex;
        this.tbls$ = this.tables$.pipe(
          map(t => t.tables.filter(tbl => tbl.status === this.tabindex || this.tabindex === 0))
        );
        break;
      case 3:
        //this.tabindex = tabIndex;
        break;

      default:
        break;
    }
  }

  ngOnInit() {
  }

}
