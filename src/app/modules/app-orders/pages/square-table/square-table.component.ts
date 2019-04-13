import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-square-table',
  templateUrl: './square-table.component.html',
  styleUrls: ['./square-table.component.scss']
})
export class SquareTableComponent implements OnInit {

  @Input('order-time') order_time: string;
  @Input('table-no') table_no: string;
  @Input('table-bill') table_bill: string;

  constructor() { }

  ngOnInit() {

    if (!this.order_time) { this.order_time='un'; }
    if (!this.table_no) { this.table_no='un'; }
    if (!this.table_bill) { this.table_bill='un'; }

  }
  

}
