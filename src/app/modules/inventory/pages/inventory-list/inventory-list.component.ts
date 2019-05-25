import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InventoryState } from 'src/app/store/inventory-store/states/inventory.state';
import { Store } from '@ngrx/store';
import { ApplicationState } from 'src/app/store/application.state';
import { LoadInventory } from 'src/app/store/inventory-store/actions/inventory.actions';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.scss']
})
export class InventoryListComponent implements OnInit {

  //inventory_list: IInventoryListItem[];
  popup_inventory_list=false;
  popup_add_inventory=false;

  inventory$: Observable<InventoryState>;

  constructor(private store: Store<ApplicationState>) {     
    this.inventory$ = this.store.select<InventoryState>((state: any) => state['inventory']);
    this.load();
    // this.store.select<TopSellingState>((state: any) => state['topselling'])
    // .subscribe((chart: any) => { console.log('ad'); console.log(chart); }); 

  }

  load() {
    const action = new LoadInventory();    
      this.store.dispatch(action); 
  }

  ngOnInit() {
  }

  // ngOnInit() {
  //   this.inventory_list = [
  //     {title: "Star dust Chai powder",type:"Ingredient",category:"Consumable",quantity:12,expiry_date:"06-Apr-2019",}
  //     ,{title: "Star dust Chai powder",type:"Ingredient",category:"Consumable",quantity:72,expiry_date:"06-Apr-2019",}
  //     ,{title: "Star dust Chai powder",type:"Ingredient",category:"Consumable",quantity:20,expiry_date:"06-Apr-2019",}
  //     ,{title: "Star dust Chai powder",type:"Ingredient",category:"Consumable",quantity:40,expiry_date:"06-Apr-2019",}
  //     ,{title: "Star dust Chai powder",type:"Ingredient",category:"Consumable",quantity:10,expiry_date:"06-Apr-2019",}
  //     ,{title: "Star dust Chai powder",type:"Ingredient",category:"Consumable",quantity:70,expiry_date:"06-Apr-2019",}
  //     ,{title: "Star dust Chai powder",type:"Ingredient",category:"Consumable",quantity:12,expiry_date:"06-Apr-2019",}
  //     ,{title: "Star dust Chai powder",type:"Ingredient",category:"Consumable",quantity:95,expiry_date:"06-Apr-2019",}
      
  //   ];
  // }

//   <tr>
//   <td>Masala Chai</td>
//   <td class="is-hidden-mobile">Ingredient</td>
//   <td class="is-hidden-mobile">Consumable</td>
//   <td><progress class="progress is-danger" value="25" max="100">25%</progress></td>
//   <td class="is-hidden-mobile">06-Apr-2019</td>
//   <td>
//     <a class="button is-rounded is-small">
//       <fa-icon icon="plus"></fa-icon>
//     </a>
//   </td>
// </tr>

}

// export interface IInventoryListItem {
//   title: string;
//   type: string;
//   category: string;
//   quantity:number;
//   expiry_date:string;
// }