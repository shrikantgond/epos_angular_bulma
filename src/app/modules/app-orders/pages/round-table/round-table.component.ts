import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-round-table',
  templateUrl: './round-table.component.html',
  styleUrls: ['./round-table.component.scss']
})
export class RoundTableComponent implements OnInit {

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
