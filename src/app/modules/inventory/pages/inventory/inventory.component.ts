import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  selected_tab;
  constructor() { }

  ngOnInit() {
    this.selected_tab = "inventory";
  }

}
