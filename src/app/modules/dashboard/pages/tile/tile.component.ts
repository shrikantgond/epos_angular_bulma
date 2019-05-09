import { Component, OnInit } from '@angular/core';
import { ApplicationState } from 'src/app/store/application.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ITileModel } from 'src/app/models/tile.model';
import { LoadTile } from 'src/app/store/dashboard-store/actions/tile.actions';
//import { News } from 'src/app/store/news-store/news';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {

  tiles$: Observable<ITileModel[]>;

  constructor(private store: Store<ApplicationState>) {

    this.tiles$ = this.store.select<ITileModel[]>((state: any) => state['tiles'].tiles);        
    this.load();
    // this.store.select<ITileModel[]>((state: any) => state)
    // .subscribe((chart: any) => { console.log('ad'); console.log(chart); });

   }

   load() {
    const action = new LoadTile();    
      this.store.dispatch(action);    
  }

  ngOnInit() {
    // this.tiles = [{ title:"Total Orders",count:"78",change:-4,link:"next"},
    // { title:"Total Customers",count:"51",change:21,link:"next"},
    // { title:"Total Sale",count:"$1420",change:4,link:"next"},
    // { title:"Total Orders",count:"45",change:-2,link:"next"}]   

  }

  getTiles(){

  }

}

