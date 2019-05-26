import { Component, OnInit } from '@angular/core';
import { LoadMenu } from 'src/app/store/order-store/actions/menu.actions';
import { MenuState } from 'src/app/store/order-store/states/menu.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-app-menus',
  templateUrl: './app-menus.component.html',
  styleUrls: ['./app-menus.component.scss']
})
export class AppMenusComponent implements OnInit {

  popup_add_menu=false;
  menus$: Observable<MenuState>;
 
  constructor(private store: Store<MenuState>) {

    this.menus$ = this.store.select<MenuState>((state: any) => state['menu']);
    this.load();

  }

  load() {
    const action = new LoadMenu();
    this.store.dispatch(action);
  }

  ngOnInit() {
  }

}
