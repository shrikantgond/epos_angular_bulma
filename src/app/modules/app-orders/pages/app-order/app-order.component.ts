import { Component, OnInit } from '@angular/core';
import { MenuState } from 'src/app/store/order-store/states/menu.state';
import { IMenuModel } from 'src/app/models/menu.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { LoadMenu } from 'src/app/store/order-store/actions/menu.actions';
import { map } from 'rxjs/operators';
import { OrderState } from 'src/app/store/order-store/states/order.state';
import { LoadOrder, SaveOrder } from 'src/app/store/order-store/actions/order.actions';
import { IOrderModel } from 'src/app/models/order.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-app-order',
  templateUrl: './app-order.component.html',
  styleUrls: ['./app-order.component.scss']
})
export class AppOrderComponent implements OnInit {

  menustate$: Observable<MenuState>;
  menus$: Observable<IMenuModel[]>
  orderstate$: Observable<OrderState>;
  order$: Observable<IOrderModel>;

  input_table_no: 1;

  total: number;
  tax: number;

  tabcode: string = '';

  constructor(private store: Store<MenuState>,private _Activatedroute:ActivatedRoute) {
    _Activatedroute.params.subscribe(params => { 
      this.input_table_no = params['id'];
      //console.log("this.input_table_no"); 
      //console.log(this.input_table_no); 
      }
      );

    this.menustate$ = this.store.select<MenuState>((state: any) => state['menu']);
    this.orderstate$ = this.store.select<OrderState>((state: any) => state['order']);        

      this.load();

    this.menus$ = this.menustate$.pipe(
      map(t => t.menus.filter(m => m.typecode === this.tabcode || this.tabcode === ''))
    );

    
    

    //this.input_table_no = 1; 
    //console.log(this.input_table_no); 
    this.total = 0; this.tax = .10;
    this.order$ = this.orderstate$.pipe(
      map(t => t.orders.find(m => m.tablecode.toString() === this.input_table_no.toString()))
    );

    //this.orderstate$.subscribe((chart: any) => { console.log('orderstate'); console.log(chart); });
    this.order$.subscribe((order: IOrderModel) => {
      this.total=0;
      if (order) {
        order.items.forEach(i => {
          this.total += i.menurate * i.quantity;
        });
      }      
    });

    //console.log(this.total);
    // this.orderstate$.subscribe((chart: any) => 
    // { console.log('orderstate'); console.log(chart); });

    // this.order$.subscribe((chart: any) => 
    // { console.log('order'); console.log(chart); });

  }

  load() {
    const action = new LoadMenu();
    this.store.dispatch(action);

    const actionorders = new LoadOrder();
    this.store.dispatch(actionorders);   
    // this.store.dispatch(new SaveOrder({ 
    //   tablecode: this.input_table_no,
    //   menuitem: {menutitle: 'Masala Chai', menurate: 20, quantity: 1, kot:1},    
    //   actiontype: 'ADD'
    // }));
    
  }

  addmenuitem(menu: IMenuModel){

    console.log('new menu');
    console.log(menu);

    // let order: IOrderModel = {
    //   tablecode: 1, customer: { name: 'Shrikant' }
    //   , items: [
    //     { 'menutitle': menu.title, 'menurate': menu.rate , 'quantity': 1 , 'kot': 1 }
    //   ]
    // };
    // this.store.dispatch(new SaveOrder({ order }));
    this.store.dispatch(new SaveOrder({ 
      tablecode: this.input_table_no,
    menuitem: {menutitle: menu.title, menurate: menu.rate, quantity: 1, kot:1},
    actiontype: 'ADD'
    }));

  }

  onTabChange(tab) {
    this.tabcode = tab;
    this.menus$ = this.menustate$.pipe(
      map(t => t.menus.filter(m => m.typecode === this.tabcode || this.tabcode === ''))
    );
    this.menus$.subscribe((chart: any) => { console.log(chart); });
  }

  ngOnInit() {
  }

}
