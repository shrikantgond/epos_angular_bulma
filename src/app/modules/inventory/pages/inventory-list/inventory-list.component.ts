import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.scss']
})
export class InventoryListComponent implements OnInit {

  inventory_list: IInventoryListItem[];
  popup_inventory_list=false;
  popup_add_inventory=false;

  constructor() { }

  ngOnInit() {
    this.inventory_list = [
      {title: "Star dust Chai powder",type:"Ingredient",category:"Consumable",quantity:12,expiry_date:"06-Apr-2019",}
      ,{title: "Star dust Chai powder",type:"Ingredient",category:"Consumable",quantity:72,expiry_date:"06-Apr-2019",}
      ,{title: "Star dust Chai powder",type:"Ingredient",category:"Consumable",quantity:20,expiry_date:"06-Apr-2019",}
      ,{title: "Star dust Chai powder",type:"Ingredient",category:"Consumable",quantity:40,expiry_date:"06-Apr-2019",}
      ,{title: "Star dust Chai powder",type:"Ingredient",category:"Consumable",quantity:10,expiry_date:"06-Apr-2019",}
      ,{title: "Star dust Chai powder",type:"Ingredient",category:"Consumable",quantity:70,expiry_date:"06-Apr-2019",}
      ,{title: "Star dust Chai powder",type:"Ingredient",category:"Consumable",quantity:12,expiry_date:"06-Apr-2019",}
      ,{title: "Star dust Chai powder",type:"Ingredient",category:"Consumable",quantity:95,expiry_date:"06-Apr-2019",}
      
    ];
  }

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

export interface IInventoryListItem {
  title: string;
  type: string;
  category: string;
  quantity:number;
  expiry_date:string;
}