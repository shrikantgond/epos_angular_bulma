import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {

  tiles: ITile[];

  constructor() { }

  ngOnInit() {
    this.tiles = [{ title:"Total Orders",count:"78",change:-4,link:"next"},
    { title:"Total Customers",count:"51",change:21,link:"next"},
    { title:"Total Sale",count:"$1420",change:4,link:"next"},
    { title:"Total Orders",count:"45",change:-2,link:"next"}]   

  }

}

export interface ITile{
  title:string;
  count:string;
  change:number;
  link:string;
}
