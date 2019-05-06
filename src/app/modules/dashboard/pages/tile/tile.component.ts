import { Component, OnInit } from '@angular/core';
import { ApplicationState } from 'src/app/store/application.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
//import { News } from 'src/app/store/news-store/news';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {

  tiles: ITile[];

  constructor(private store: Store<ApplicationState>) {

    // this.news$ = this.store.select<News>((state: any) => state['news'].news);    
    
    // this.store
    // .select<News>((state: any) => state['news'].news) // the complete state this time!!!
    // .subscribe((completeState: any) => {
    //   console.log("completeState");
    //   console.log(completeState);
    // });

   }

  ngOnInit() {
    this.tiles = [{ title:"Total Orders",count:"78",change:-4,link:"next"},
    { title:"Total Customers",count:"51",change:21,link:"next"},
    { title:"Total Sale",count:"$1420",change:4,link:"next"},
    { title:"Total Orders",count:"45",change:-2,link:"next"}]   

  }

  getTiles(){

  }

}

export interface ITile{
  title:string;
  count:string;
  change:number;
  link:string;
}
